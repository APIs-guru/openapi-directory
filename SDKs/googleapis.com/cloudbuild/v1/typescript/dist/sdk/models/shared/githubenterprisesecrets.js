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
// GitHubEnterpriseSecrets
/**
 * GitHubEnterpriseSecrets represents the names of all necessary secrets in Secret Manager for a GitHub Enterprise server. Format is: projects//secrets/.
**/
var GitHubEnterpriseSecrets = /** @class */ (function (_super) {
    __extends(GitHubEnterpriseSecrets, _super);
    function GitHubEnterpriseSecrets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauthClientIdName" }),
        __metadata("design:type", String)
    ], GitHubEnterpriseSecrets.prototype, "oauthClientIdName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauthClientIdVersionName" }),
        __metadata("design:type", String)
    ], GitHubEnterpriseSecrets.prototype, "oauthClientIdVersionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauthSecretName" }),
        __metadata("design:type", String)
    ], GitHubEnterpriseSecrets.prototype, "oauthSecretName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauthSecretVersionName" }),
        __metadata("design:type", String)
    ], GitHubEnterpriseSecrets.prototype, "oauthSecretVersionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateKeyName" }),
        __metadata("design:type", String)
    ], GitHubEnterpriseSecrets.prototype, "privateKeyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateKeyVersionName" }),
        __metadata("design:type", String)
    ], GitHubEnterpriseSecrets.prototype, "privateKeyVersionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhookSecretName" }),
        __metadata("design:type", String)
    ], GitHubEnterpriseSecrets.prototype, "webhookSecretName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhookSecretVersionName" }),
        __metadata("design:type", String)
    ], GitHubEnterpriseSecrets.prototype, "webhookSecretVersionName", void 0);
    return GitHubEnterpriseSecrets;
}(SpeakeasyBase));
export { GitHubEnterpriseSecrets };
