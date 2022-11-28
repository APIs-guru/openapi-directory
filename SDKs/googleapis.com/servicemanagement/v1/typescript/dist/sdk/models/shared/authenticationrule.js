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
import { OAuthRequirements } from "./oauthrequirements";
import { AuthRequirement } from "./authrequirement";
// AuthenticationRule
/**
 * Authentication rules for the service. By default, if a method has any authentication requirements, every request must include a valid credential matching one of the requirements. It's an error to include more than one kind of credential in a single request. If a method doesn't have any auth requirements, request credentials will be ignored.
**/
var AuthenticationRule = /** @class */ (function (_super) {
    __extends(AuthenticationRule, _super);
    function AuthenticationRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowWithoutCredential" }),
        __metadata("design:type", Boolean)
    ], AuthenticationRule.prototype, "allowWithoutCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauth" }),
        __metadata("design:type", OAuthRequirements)
    ], AuthenticationRule.prototype, "oauth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requirements", elemType: AuthRequirement }),
        __metadata("design:type", Array)
    ], AuthenticationRule.prototype, "requirements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selector" }),
        __metadata("design:type", String)
    ], AuthenticationRule.prototype, "selector", void 0);
    return AuthenticationRule;
}(SpeakeasyBase));
export { AuthenticationRule };
