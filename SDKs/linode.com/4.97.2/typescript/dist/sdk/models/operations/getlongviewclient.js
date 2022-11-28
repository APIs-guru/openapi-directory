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
var GetLongviewClientPathParams = /** @class */ (function (_super) {
    __extends(GetLongviewClientPathParams, _super);
    function GetLongviewClientPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" }),
        __metadata("design:type", Number)
    ], GetLongviewClientPathParams.prototype, "clientId", void 0);
    return GetLongviewClientPathParams;
}(SpeakeasyBase));
export { GetLongviewClientPathParams };
var GetLongviewClientSecurity = /** @class */ (function (_super) {
    __extends(GetLongviewClientSecurity, _super);
    function GetLongviewClientSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetLongviewClientSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetLongviewClientSecurity.prototype, "oauth", void 0);
    return GetLongviewClientSecurity;
}(SpeakeasyBase));
export { GetLongviewClientSecurity };
var GetLongviewClientDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetLongviewClientDefaultApplicationJson, _super);
    function GetLongviewClientDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetLongviewClientDefaultApplicationJson.prototype, "errors", void 0);
    return GetLongviewClientDefaultApplicationJson;
}(SpeakeasyBase));
export { GetLongviewClientDefaultApplicationJson };
var GetLongviewClientRequest = /** @class */ (function (_super) {
    __extends(GetLongviewClientRequest, _super);
    function GetLongviewClientRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLongviewClientPathParams)
    ], GetLongviewClientRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLongviewClientSecurity)
    ], GetLongviewClientRequest.prototype, "security", void 0);
    return GetLongviewClientRequest;
}(SpeakeasyBase));
export { GetLongviewClientRequest };
var GetLongviewClientResponse = /** @class */ (function (_super) {
    __extends(GetLongviewClientResponse, _super);
    function GetLongviewClientResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLongviewClientResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LongviewClient)
    ], GetLongviewClientResponse.prototype, "longviewClient", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLongviewClientResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLongviewClientDefaultApplicationJson)
    ], GetLongviewClientResponse.prototype, "getLongviewClientDefaultApplicationJsonObject", void 0);
    return GetLongviewClientResponse;
}(SpeakeasyBase));
export { GetLongviewClientResponse };
