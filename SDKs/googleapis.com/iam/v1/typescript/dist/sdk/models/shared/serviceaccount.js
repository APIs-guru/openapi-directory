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
// ServiceAccount
/**
 * An IAM service account. A service account is an account for an application or a virtual machine (VM) instance, not a person. You can use a service account to call Google APIs. To learn more, read the [overview of service accounts](https://cloud.google.com/iam/help/service-accounts/overview). When you create a service account, you specify the project ID that owns the service account, as well as a name that must be unique within the project. IAM uses these values to create an email address that identifies the service account.
**/
var ServiceAccount = /** @class */ (function (_super) {
    __extends(ServiceAccount, _super);
    function ServiceAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ServiceAccount.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], ServiceAccount.prototype, "disabled", void 0);
    __decorate([
        Metadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ServiceAccount.prototype, "displayName", void 0);
    __decorate([
        Metadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ServiceAccount.prototype, "email", void 0);
    __decorate([
        Metadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], ServiceAccount.prototype, "etag", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ServiceAccount.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=oauth2ClientId" }),
        __metadata("design:type", String)
    ], ServiceAccount.prototype, "oauth2ClientId", void 0);
    __decorate([
        Metadata({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], ServiceAccount.prototype, "projectId", void 0);
    __decorate([
        Metadata({ data: "json, name=uniqueId" }),
        __metadata("design:type", String)
    ], ServiceAccount.prototype, "uniqueId", void 0);
    return ServiceAccount;
}(SpeakeasyBase));
export { ServiceAccount };
