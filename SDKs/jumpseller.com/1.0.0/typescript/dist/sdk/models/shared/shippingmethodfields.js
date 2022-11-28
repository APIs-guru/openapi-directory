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
import { ShippingService } from "./shippingservice";
export var ShippingMethodFieldsTypeEnum;
(function (ShippingMethodFieldsTypeEnum) {
    ShippingMethodFieldsTypeEnum["Free"] = "free";
    ShippingMethodFieldsTypeEnum["Tables"] = "tables";
    ShippingMethodFieldsTypeEnum["Correiosbr"] = "correiosbr";
    ShippingMethodFieldsTypeEnum["CorreosChile"] = "correos_chile";
    ShippingMethodFieldsTypeEnum["Chilexpress"] = "chilexpress";
    ShippingMethodFieldsTypeEnum["Flat"] = "flat";
    ShippingMethodFieldsTypeEnum["Ups"] = "ups";
    ShippingMethodFieldsTypeEnum["External"] = "external";
})(ShippingMethodFieldsTypeEnum || (ShippingMethodFieldsTypeEnum = {}));
var ShippingMethodFields = /** @class */ (function (_super) {
    __extends(ShippingMethodFields, _super);
    function ShippingMethodFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=callback_url" }),
        __metadata("design:type", String)
    ], ShippingMethodFields.prototype, "callbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], ShippingMethodFields.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fetch_services_url" }),
        __metadata("design:type", String)
    ], ShippingMethodFields.prototype, "fetchServicesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ShippingMethodFields.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ShippingMethodFields.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postal" }),
        __metadata("design:type", String)
    ], ShippingMethodFields.prototype, "postal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=services", elemType: ShippingService }),
        __metadata("design:type", Array)
    ], ShippingMethodFields.prototype, "services", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ShippingMethodFields.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ShippingMethodFields.prototype, "type", void 0);
    return ShippingMethodFields;
}(SpeakeasyBase));
export { ShippingMethodFields };
