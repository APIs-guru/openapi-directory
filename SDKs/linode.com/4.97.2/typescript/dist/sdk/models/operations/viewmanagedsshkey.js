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
import * as shared from "../shared";
var ViewManagedSshKeySecurity = /** @class */ (function (_super) {
    __extends(ViewManagedSshKeySecurity, _super);
    function ViewManagedSshKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], ViewManagedSshKeySecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], ViewManagedSshKeySecurity.prototype, "oauth", void 0);
    return ViewManagedSshKeySecurity;
}(SpeakeasyBase));
export { ViewManagedSshKeySecurity };
// ViewManagedSshKey200ApplicationJson
/**
 * A unique SSH public key that allows Linode's special forces to access a Managed server to respond to Issues.
 *
**/
var ViewManagedSshKey200ApplicationJson = /** @class */ (function (_super) {
    __extends(ViewManagedSshKey200ApplicationJson, _super);
    function ViewManagedSshKey200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssh_key" }),
        __metadata("design:type", String)
    ], ViewManagedSshKey200ApplicationJson.prototype, "sshKey", void 0);
    return ViewManagedSshKey200ApplicationJson;
}(SpeakeasyBase));
export { ViewManagedSshKey200ApplicationJson };
var ViewManagedSshKeyDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(ViewManagedSshKeyDefaultApplicationJson, _super);
    function ViewManagedSshKeyDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], ViewManagedSshKeyDefaultApplicationJson.prototype, "errors", void 0);
    return ViewManagedSshKeyDefaultApplicationJson;
}(SpeakeasyBase));
export { ViewManagedSshKeyDefaultApplicationJson };
var ViewManagedSshKeyRequest = /** @class */ (function (_super) {
    __extends(ViewManagedSshKeyRequest, _super);
    function ViewManagedSshKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ViewManagedSshKeySecurity)
    ], ViewManagedSshKeyRequest.prototype, "security", void 0);
    return ViewManagedSshKeyRequest;
}(SpeakeasyBase));
export { ViewManagedSshKeyRequest };
var ViewManagedSshKeyResponse = /** @class */ (function (_super) {
    __extends(ViewManagedSshKeyResponse, _super);
    function ViewManagedSshKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ViewManagedSshKeyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ViewManagedSshKeyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ViewManagedSshKey200ApplicationJson)
    ], ViewManagedSshKeyResponse.prototype, "viewManagedSshKey200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ViewManagedSshKeyDefaultApplicationJson)
    ], ViewManagedSshKeyResponse.prototype, "viewManagedSshKeyDefaultApplicationJsonObject", void 0);
    return ViewManagedSshKeyResponse;
}(SpeakeasyBase));
export { ViewManagedSshKeyResponse };
