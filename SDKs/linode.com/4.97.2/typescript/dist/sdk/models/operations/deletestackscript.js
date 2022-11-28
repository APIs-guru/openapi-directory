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
var DeleteStackScriptPathParams = /** @class */ (function (_super) {
    __extends(DeleteStackScriptPathParams, _super);
    function DeleteStackScriptPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stackscriptId" }),
        __metadata("design:type", String)
    ], DeleteStackScriptPathParams.prototype, "stackscriptId", void 0);
    return DeleteStackScriptPathParams;
}(SpeakeasyBase));
export { DeleteStackScriptPathParams };
var DeleteStackScriptSecurity = /** @class */ (function (_super) {
    __extends(DeleteStackScriptSecurity, _super);
    function DeleteStackScriptSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], DeleteStackScriptSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], DeleteStackScriptSecurity.prototype, "oauth", void 0);
    return DeleteStackScriptSecurity;
}(SpeakeasyBase));
export { DeleteStackScriptSecurity };
var DeleteStackScriptDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteStackScriptDefaultApplicationJson, _super);
    function DeleteStackScriptDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], DeleteStackScriptDefaultApplicationJson.prototype, "errors", void 0);
    return DeleteStackScriptDefaultApplicationJson;
}(SpeakeasyBase));
export { DeleteStackScriptDefaultApplicationJson };
var DeleteStackScriptRequest = /** @class */ (function (_super) {
    __extends(DeleteStackScriptRequest, _super);
    function DeleteStackScriptRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteStackScriptPathParams)
    ], DeleteStackScriptRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteStackScriptSecurity)
    ], DeleteStackScriptRequest.prototype, "security", void 0);
    return DeleteStackScriptRequest;
}(SpeakeasyBase));
export { DeleteStackScriptRequest };
var DeleteStackScriptResponse = /** @class */ (function (_super) {
    __extends(DeleteStackScriptResponse, _super);
    function DeleteStackScriptResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteStackScriptResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteStackScriptResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteStackScriptResponse.prototype, "deleteStackScript200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteStackScriptDefaultApplicationJson)
    ], DeleteStackScriptResponse.prototype, "deleteStackScriptDefaultApplicationJsonObject", void 0);
    return DeleteStackScriptResponse;
}(SpeakeasyBase));
export { DeleteStackScriptResponse };
