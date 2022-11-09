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
import { Aws } from "./aws";
import { Oidc } from "./oidc";
import { Saml } from "./saml";
export var WorkloadIdentityPoolProviderStateEnum;
(function (WorkloadIdentityPoolProviderStateEnum) {
    WorkloadIdentityPoolProviderStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    WorkloadIdentityPoolProviderStateEnum["Active"] = "ACTIVE";
    WorkloadIdentityPoolProviderStateEnum["Deleted"] = "DELETED";
})(WorkloadIdentityPoolProviderStateEnum || (WorkloadIdentityPoolProviderStateEnum = {}));
// WorkloadIdentityPoolProvider
/**
 * A configuration for an external identity provider.
**/
var WorkloadIdentityPoolProvider = /** @class */ (function (_super) {
    __extends(WorkloadIdentityPoolProvider, _super);
    function WorkloadIdentityPoolProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=attributeCondition" }),
        __metadata("design:type", String)
    ], WorkloadIdentityPoolProvider.prototype, "attributeCondition", void 0);
    __decorate([
        Metadata({ data: "json, name=attributeMapping" }),
        __metadata("design:type", Map)
    ], WorkloadIdentityPoolProvider.prototype, "attributeMapping", void 0);
    __decorate([
        Metadata({ data: "json, name=aws" }),
        __metadata("design:type", Aws)
    ], WorkloadIdentityPoolProvider.prototype, "aws", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], WorkloadIdentityPoolProvider.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], WorkloadIdentityPoolProvider.prototype, "disabled", void 0);
    __decorate([
        Metadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], WorkloadIdentityPoolProvider.prototype, "displayName", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], WorkloadIdentityPoolProvider.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=oidc" }),
        __metadata("design:type", Oidc)
    ], WorkloadIdentityPoolProvider.prototype, "oidc", void 0);
    __decorate([
        Metadata({ data: "json, name=saml" }),
        __metadata("design:type", Saml)
    ], WorkloadIdentityPoolProvider.prototype, "saml", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], WorkloadIdentityPoolProvider.prototype, "state", void 0);
    return WorkloadIdentityPoolProvider;
}(SpeakeasyBase));
export { WorkloadIdentityPoolProvider };
