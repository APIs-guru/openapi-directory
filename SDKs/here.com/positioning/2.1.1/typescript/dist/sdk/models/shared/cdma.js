var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CdmaLocalId } from "./cdmalocalid";
import { CdmaNmr } from "./cdmanmr";
// Cdma
/**
 * CDMA measurement
**/
var Cdma = /** @class */ (function (_super) {
    __extends(Cdma, _super);
    function Cdma() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=baseLat" }),
        __metadata("design:type", Number)
    ], Cdma.prototype, "baseLat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=baseLng" }),
        __metadata("design:type", Number)
    ], Cdma.prototype, "baseLng", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bsid" }),
        __metadata("design:type", Number)
    ], Cdma.prototype, "bsid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localId" }),
        __metadata("design:type", CdmaLocalId)
    ], Cdma.prototype, "localId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nid" }),
        __metadata("design:type", Number)
    ], Cdma.prototype, "nid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nmr", elemType: CdmaNmr }),
        __metadata("design:type", Array)
    ], Cdma.prototype, "nmr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pilotPower" }),
        __metadata("design:type", Number)
    ], Cdma.prototype, "pilotPower", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rz" }),
        __metadata("design:type", Number)
    ], Cdma.prototype, "rz", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", Number)
    ], Cdma.prototype, "sid", void 0);
    return Cdma;
}(SpeakeasyBase));
export { Cdma };
