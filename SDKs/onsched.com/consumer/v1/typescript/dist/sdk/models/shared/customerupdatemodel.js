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
import { AddressUpdateModel } from "./addressupdatemodel";
import { ContactUpdateModel } from "./contactupdatemodel";
import { CustomFieldUpdateModel } from "./customfieldupdatemodel";
var CustomerUpdateModel = /** @class */ (function (_super) {
    __extends(CustomerUpdateModel, _super);
    function CustomerUpdateModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", AddressUpdateModel)
    ], CustomerUpdateModel.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contact" }),
        __metadata("design:type", ContactUpdateModel)
    ], CustomerUpdateModel.prototype, "contact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customFields" }),
        __metadata("design:type", CustomFieldUpdateModel)
    ], CustomerUpdateModel.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], CustomerUpdateModel.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstname" }),
        __metadata("design:type", String)
    ], CustomerUpdateModel.prototype, "firstname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastname" }),
        __metadata("design:type", String)
    ], CustomerUpdateModel.prototype, "lastname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locationId" }),
        __metadata("design:type", String)
    ], CustomerUpdateModel.prototype, "locationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CustomerUpdateModel.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationType" }),
        __metadata("design:type", String)
    ], CustomerUpdateModel.prototype, "notificationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stripeCustomerId" }),
        __metadata("design:type", String)
    ], CustomerUpdateModel.prototype, "stripeCustomerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], CustomerUpdateModel.prototype, "type", void 0);
    return CustomerUpdateModel;
}(SpeakeasyBase));
export { CustomerUpdateModel };
