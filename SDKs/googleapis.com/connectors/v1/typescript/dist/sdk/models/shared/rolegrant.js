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
import { Resource } from "./resource";
export var RoleGrantPrincipalEnum;
(function (RoleGrantPrincipalEnum) {
    RoleGrantPrincipalEnum["PrincipalUnspecified"] = "PRINCIPAL_UNSPECIFIED";
    RoleGrantPrincipalEnum["ConnectorSa"] = "CONNECTOR_SA";
})(RoleGrantPrincipalEnum || (RoleGrantPrincipalEnum = {}));
// RoleGrant
/**
 * This configuration defines all the Cloud IAM roles that needs to be granted to a particular GCP resource for the selected prinicpal like service account. These configurations will let UI display to customers what IAM roles need to be granted by them. Or these configurations can be used by the UI to render a 'grant' button to do the same on behalf of the user.
**/
var RoleGrant = /** @class */ (function (_super) {
    __extends(RoleGrant, _super);
    function RoleGrant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=helperTextTemplate" }),
        __metadata("design:type", String)
    ], RoleGrant.prototype, "helperTextTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=principal" }),
        __metadata("design:type", String)
    ], RoleGrant.prototype, "principal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource" }),
        __metadata("design:type", Resource)
    ], RoleGrant.prototype, "resource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roles" }),
        __metadata("design:type", Array)
    ], RoleGrant.prototype, "roles", void 0);
    return RoleGrant;
}(SpeakeasyBase));
export { RoleGrant };
