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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var CustomerViewModel = /** @class */ (function (_super) {
    __extends(CustomerViewModel, _super);
    function CustomerViewModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=birthdate" }),
        __metadata("design:type", String)
    ], CustomerViewModel.prototype, "birthdate", void 0);
    __decorate([
        Metadata({ data: "json, name=businessName" }),
        __metadata("design:type", String)
    ], CustomerViewModel.prototype, "businessName", void 0);
    __decorate([
        Metadata({ data: "json, name=companyName" }),
        __metadata("design:type", String)
    ], CustomerViewModel.prototype, "companyName", void 0);
    __decorate([
        Metadata({ data: "json, name=createdBy" }),
        __metadata("design:type", String)
    ], CustomerViewModel.prototype, "createdBy", void 0);
    __decorate([
        Metadata({ data: "json, name=createdOn" }),
        __metadata("design:type", String)
    ], CustomerViewModel.prototype, "createdOn", void 0);
    __decorate([
        Metadata({ data: "json, name=deletedStatus" }),
        __metadata("design:type", Boolean)
    ], CustomerViewModel.prototype, "deletedStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=deletedTime" }),
        __metadata("design:type", String)
    ], CustomerViewModel.prototype, "deletedTime", void 0);
    __decorate([
        Metadata({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], CustomerViewModel.prototype, "disabled", void 0);
    __decorate([
        Metadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], CustomerViewModel.prototype, "email", void 0);
    __decorate([
        Metadata({ data: "json, name=emailInfo" }),
        __metadata("design:type", Boolean)
    ], CustomerViewModel.prototype, "emailInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=emailPromotion" }),
        __metadata("design:type", Boolean)
    ], CustomerViewModel.prototype, "emailPromotion", void 0);
    __decorate([
        Metadata({ data: "json, name=firstname" }),
        __metadata("design:type", String)
    ], CustomerViewModel.prototype, "firstname", void 0);
    __decorate([
        Metadata({ data: "json, name=gender" }),
        __metadata("design:type", String)
    ], CustomerViewModel.prototype, "gender", void 0);
    __decorate([
        Metadata({ data: "json, name=groupId" }),
        __metadata("design:type", String)
    ], CustomerViewModel.prototype, "groupId", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CustomerViewModel.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=inviteEmailSent" }),
        __metadata("design:type", String)
    ], CustomerViewModel.prototype, "inviteEmailSent", void 0);
    __decorate([
        Metadata({ data: "json, name=lastVisitDate" }),
        __metadata("design:type", String)
    ], CustomerViewModel.prototype, "lastVisitDate", void 0);
    __decorate([
        Metadata({ data: "json, name=lastname" }),
        __metadata("design:type", String)
    ], CustomerViewModel.prototype, "lastname", void 0);
    __decorate([
        Metadata({ data: "json, name=latitude" }),
        __metadata("design:type", String)
    ], CustomerViewModel.prototype, "latitude", void 0);
    __decorate([
        Metadata({ data: "json, name=locationId" }),
        __metadata("design:type", String)
    ], CustomerViewModel.prototype, "locationId", void 0);
    __decorate([
        Metadata({ data: "json, name=longitude" }),
        __metadata("design:type", String)
    ], CustomerViewModel.prototype, "longitude", void 0);
    __decorate([
        Metadata({ data: "json, name=modifiedBy" }),
        __metadata("design:type", String)
    ], CustomerViewModel.prototype, "modifiedBy", void 0);
    __decorate([
        Metadata({ data: "json, name=modifiedOn" }),
        __metadata("design:type", String)
    ], CustomerViewModel.prototype, "modifiedOn", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CustomerViewModel.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=notificationType" }),
        __metadata("design:type", String)
    ], CustomerViewModel.prototype, "notificationType", void 0);
    __decorate([
        Metadata({ data: "json, name=objectName" }),
        __metadata("design:type", String)
    ], CustomerViewModel.prototype, "objectName", void 0);
    __decorate([
        Metadata({ data: "json, name=registeredBy" }),
        __metadata("design:type", String)
    ], CustomerViewModel.prototype, "registeredBy", void 0);
    __decorate([
        Metadata({ data: "json, name=registrationDate" }),
        __metadata("design:type", String)
    ], CustomerViewModel.prototype, "registrationDate", void 0);
    __decorate([
        Metadata({ data: "json, name=resourceId" }),
        __metadata("design:type", String)
    ], CustomerViewModel.prototype, "resourceId", void 0);
    __decorate([
        Metadata({ data: "json, name=stripeCustomerId" }),
        __metadata("design:type", String)
    ], CustomerViewModel.prototype, "stripeCustomerId", void 0);
    __decorate([
        Metadata({ data: "json, name=subscriptionId" }),
        __metadata("design:type", String)
    ], CustomerViewModel.prototype, "subscriptionId", void 0);
    __decorate([
        Metadata({ data: "json, name=verificationDate" }),
        __metadata("design:type", String)
    ], CustomerViewModel.prototype, "verificationDate", void 0);
    __decorate([
        Metadata({ data: "json, name=verifiedBy" }),
        __metadata("design:type", String)
    ], CustomerViewModel.prototype, "verifiedBy", void 0);
    __decorate([
        Metadata({ data: "json, name=welcomeEmailSent" }),
        __metadata("design:type", String)
    ], CustomerViewModel.prototype, "welcomeEmailSent", void 0);
    return CustomerViewModel;
}(SpeakeasyBase));
export { CustomerViewModel };
