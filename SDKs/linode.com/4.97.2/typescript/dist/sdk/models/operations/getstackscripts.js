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
var GetStackScriptsQueryParams = /** @class */ (function (_super) {
    __extends(GetStackScriptsQueryParams, _super);
    function GetStackScriptsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetStackScriptsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetStackScriptsQueryParams.prototype, "pageSize", void 0);
    return GetStackScriptsQueryParams;
}(SpeakeasyBase));
export { GetStackScriptsQueryParams };
var GetStackScriptsSecurity = /** @class */ (function (_super) {
    __extends(GetStackScriptsSecurity, _super);
    function GetStackScriptsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetStackScriptsSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetStackScriptsSecurity.prototype, "oauth", void 0);
    return GetStackScriptsSecurity;
}(SpeakeasyBase));
export { GetStackScriptsSecurity };
var GetStackScripts200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetStackScripts200ApplicationJson, _super);
    function GetStackScripts200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.StackScript }),
        __metadata("design:type", Array)
    ], GetStackScripts200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetStackScripts200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetStackScripts200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetStackScripts200ApplicationJson.prototype, "results", void 0);
    return GetStackScripts200ApplicationJson;
}(SpeakeasyBase));
export { GetStackScripts200ApplicationJson };
var GetStackScriptsDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetStackScriptsDefaultApplicationJson, _super);
    function GetStackScriptsDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetStackScriptsDefaultApplicationJson.prototype, "errors", void 0);
    return GetStackScriptsDefaultApplicationJson;
}(SpeakeasyBase));
export { GetStackScriptsDefaultApplicationJson };
var GetStackScriptsRequest = /** @class */ (function (_super) {
    __extends(GetStackScriptsRequest, _super);
    function GetStackScriptsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStackScriptsQueryParams)
    ], GetStackScriptsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStackScriptsSecurity)
    ], GetStackScriptsRequest.prototype, "security", void 0);
    return GetStackScriptsRequest;
}(SpeakeasyBase));
export { GetStackScriptsRequest };
var GetStackScriptsResponse = /** @class */ (function (_super) {
    __extends(GetStackScriptsResponse, _super);
    function GetStackScriptsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetStackScriptsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetStackScriptsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStackScripts200ApplicationJson)
    ], GetStackScriptsResponse.prototype, "getStackScripts200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetStackScriptsDefaultApplicationJson)
    ], GetStackScriptsResponse.prototype, "getStackScriptsDefaultApplicationJsonObject", void 0);
    return GetStackScriptsResponse;
}(SpeakeasyBase));
export { GetStackScriptsResponse };
