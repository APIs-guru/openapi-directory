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
export var OAuthClientStatusEnum;
(function (OAuthClientStatusEnum) {
    OAuthClientStatusEnum["Active"] = "active";
    OAuthClientStatusEnum["Disabled"] = "disabled";
    OAuthClientStatusEnum["Suspended"] = "suspended";
})(OAuthClientStatusEnum || (OAuthClientStatusEnum = {}));
// OAuthClientInput
/**
 * A third-party application registered to Linode that users may log into with their Linode account through our authentication server at <a target="_top" href="https://login.linode.com">https://login.linode.com</a>.  Using an OAuth Client, a third-party developer may be given access to some, or all, of a User's account for the purposes of their application.
 *
**/
var OAuthClientInput = /** @class */ (function (_super) {
    __extends(OAuthClientInput, _super);
    function OAuthClientInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], OAuthClientInput.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirect_uri" }),
        __metadata("design:type", String)
    ], OAuthClientInput.prototype, "redirectUri", void 0);
    return OAuthClientInput;
}(SpeakeasyBase));
export { OAuthClientInput };
// OAuthClient
/**
 * A third-party application registered to Linode that users may log into with their Linode account through our authentication server at <a target="_top" href="https://login.linode.com">https://login.linode.com</a>.  Using an OAuth Client, a third-party developer may be given access to some, or all, of a User's account for the purposes of their application.
 *
**/
var OAuthClient = /** @class */ (function (_super) {
    __extends(OAuthClient, _super);
    function OAuthClient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], OAuthClient.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], OAuthClient.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public" }),
        __metadata("design:type", Boolean)
    ], OAuthClient.prototype, "public", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirect_uri" }),
        __metadata("design:type", String)
    ], OAuthClient.prototype, "redirectUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secret" }),
        __metadata("design:type", String)
    ], OAuthClient.prototype, "secret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], OAuthClient.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnail_url" }),
        __metadata("design:type", String)
    ], OAuthClient.prototype, "thumbnailUrl", void 0);
    return OAuthClient;
}(SpeakeasyBase));
export { OAuthClient };
