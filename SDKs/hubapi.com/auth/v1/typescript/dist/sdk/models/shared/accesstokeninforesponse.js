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
var AccessTokenInfoResponse = /** @class */ (function (_super) {
    __extends(AccessTokenInfoResponse, _super);
    function AccessTokenInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=app_id" }),
        __metadata("design:type", Number)
    ], AccessTokenInfoResponse.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expires_in" }),
        __metadata("design:type", Number)
    ], AccessTokenInfoResponse.prototype, "expiresIn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hub_domain" }),
        __metadata("design:type", String)
    ], AccessTokenInfoResponse.prototype, "hubDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hub_id" }),
        __metadata("design:type", Number)
    ], AccessTokenInfoResponse.prototype, "hubId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope_to_scope_group_pks" }),
        __metadata("design:type", Array)
    ], AccessTokenInfoResponse.prototype, "scopeToScopeGroupPks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scopes" }),
        __metadata("design:type", Array)
    ], AccessTokenInfoResponse.prototype, "scopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], AccessTokenInfoResponse.prototype, "token", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=token_type" }),
        __metadata("design:type", String)
    ], AccessTokenInfoResponse.prototype, "tokenType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trial_scope_to_scope_group_pks" }),
        __metadata("design:type", Array)
    ], AccessTokenInfoResponse.prototype, "trialScopeToScopeGroupPks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trial_scopes" }),
        __metadata("design:type", Array)
    ], AccessTokenInfoResponse.prototype, "trialScopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", String)
    ], AccessTokenInfoResponse.prototype, "user", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_id" }),
        __metadata("design:type", Number)
    ], AccessTokenInfoResponse.prototype, "userId", void 0);
    return AccessTokenInfoResponse;
}(SpeakeasyBase));
export { AccessTokenInfoResponse };
