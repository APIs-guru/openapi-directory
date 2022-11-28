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
export var AddressCurbsideEnum;
(function (AddressCurbsideEnum) {
    AddressCurbsideEnum["Right"] = "right";
    AddressCurbsideEnum["Left"] = "left";
    AddressCurbsideEnum["Any"] = "any";
})(AddressCurbsideEnum || (AddressCurbsideEnum = {}));
var Address = /** @class */ (function (_super) {
    __extends(Address, _super);
    function Address() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=curbside" }),
        __metadata("design:type", String)
    ], Address.prototype, "curbside", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lat" }),
        __metadata("design:type", Number)
    ], Address.prototype, "lat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location_id" }),
        __metadata("design:type", String)
    ], Address.prototype, "locationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lon" }),
        __metadata("design:type", Number)
    ], Address.prototype, "lon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Address.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=street_hint" }),
        __metadata("design:type", String)
    ], Address.prototype, "streetHint", void 0);
    return Address;
}(SpeakeasyBase));
export { Address };
