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
var GetLinodeIPsPathParams = /** @class */ (function (_super) {
    __extends(GetLinodeIPsPathParams, _super);
    function GetLinodeIPsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" }),
        __metadata("design:type", Number)
    ], GetLinodeIPsPathParams.prototype, "linodeId", void 0);
    return GetLinodeIPsPathParams;
}(SpeakeasyBase));
export { GetLinodeIPsPathParams };
var GetLinodeIPsSecurity = /** @class */ (function (_super) {
    __extends(GetLinodeIPsSecurity, _super);
    function GetLinodeIPsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetLinodeIPsSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetLinodeIPsSecurity.prototype, "oauth", void 0);
    return GetLinodeIPsSecurity;
}(SpeakeasyBase));
export { GetLinodeIPsSecurity };
var GetLinodeIPsDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetLinodeIPsDefaultApplicationJson, _super);
    function GetLinodeIPsDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetLinodeIPsDefaultApplicationJson.prototype, "errors", void 0);
    return GetLinodeIPsDefaultApplicationJson;
}(SpeakeasyBase));
export { GetLinodeIPsDefaultApplicationJson };
var GetLinodeIPsRequest = /** @class */ (function (_super) {
    __extends(GetLinodeIPsRequest, _super);
    function GetLinodeIPsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeIPsPathParams)
    ], GetLinodeIPsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeIPsSecurity)
    ], GetLinodeIPsRequest.prototype, "security", void 0);
    return GetLinodeIPsRequest;
}(SpeakeasyBase));
export { GetLinodeIPsRequest };
var GetLinodeIPsResponse = /** @class */ (function (_super) {
    __extends(GetLinodeIPsResponse, _super);
    function GetLinodeIPsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLinodeIPsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLinodeIPsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetLinodeIPsResponse.prototype, "getLinodeIPs200ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeIPsDefaultApplicationJson)
    ], GetLinodeIPsResponse.prototype, "getLinodeIPsDefaultApplicationJsonObject", void 0);
    return GetLinodeIPsResponse;
}(SpeakeasyBase));
export { GetLinodeIPsResponse };
