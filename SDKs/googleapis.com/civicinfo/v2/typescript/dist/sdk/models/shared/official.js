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
import { SimpleAddressType } from "./simpleaddresstype";
import { Channel } from "./channel";
import { GeocodingSummary } from "./geocodingsummary";
// Official
/**
 * Information about a person holding an elected office.
**/
var Official = /** @class */ (function (_super) {
    __extends(Official, _super);
    function Official() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address", elemType: SimpleAddressType }),
        __metadata("design:type", Array)
    ], Official.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channels", elemType: Channel }),
        __metadata("design:type", Array)
    ], Official.prototype, "channels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emails" }),
        __metadata("design:type", Array)
    ], Official.prototype, "emails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=geocodingSummaries", elemType: GeocodingSummary }),
        __metadata("design:type", Array)
    ], Official.prototype, "geocodingSummaries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Official.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=party" }),
        __metadata("design:type", String)
    ], Official.prototype, "party", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phones" }),
        __metadata("design:type", Array)
    ], Official.prototype, "phones", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photoUrl" }),
        __metadata("design:type", String)
    ], Official.prototype, "photoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urls" }),
        __metadata("design:type", Array)
    ], Official.prototype, "urls", void 0);
    return Official;
}(SpeakeasyBase));
export { Official };
