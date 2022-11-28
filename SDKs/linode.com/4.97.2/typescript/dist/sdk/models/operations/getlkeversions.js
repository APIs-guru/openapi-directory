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
var GetLkeVersionsSecurity = /** @class */ (function (_super) {
    __extends(GetLkeVersionsSecurity, _super);
    function GetLkeVersionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetLkeVersionsSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetLkeVersionsSecurity.prototype, "oauth", void 0);
    return GetLkeVersionsSecurity;
}(SpeakeasyBase));
export { GetLkeVersionsSecurity };
var GetLkeVersions200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLkeVersions200ApplicationJson, _super);
    function GetLkeVersions200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.LkeVersion }),
        __metadata("design:type", Array)
    ], GetLkeVersions200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetLkeVersions200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetLkeVersions200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetLkeVersions200ApplicationJson.prototype, "results", void 0);
    return GetLkeVersions200ApplicationJson;
}(SpeakeasyBase));
export { GetLkeVersions200ApplicationJson };
var GetLkeVersionsDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetLkeVersionsDefaultApplicationJson, _super);
    function GetLkeVersionsDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetLkeVersionsDefaultApplicationJson.prototype, "errors", void 0);
    return GetLkeVersionsDefaultApplicationJson;
}(SpeakeasyBase));
export { GetLkeVersionsDefaultApplicationJson };
var GetLkeVersionsRequest = /** @class */ (function (_super) {
    __extends(GetLkeVersionsRequest, _super);
    function GetLkeVersionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLkeVersionsSecurity)
    ], GetLkeVersionsRequest.prototype, "security", void 0);
    return GetLkeVersionsRequest;
}(SpeakeasyBase));
export { GetLkeVersionsRequest };
var GetLkeVersionsResponse = /** @class */ (function (_super) {
    __extends(GetLkeVersionsResponse, _super);
    function GetLkeVersionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLkeVersionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLkeVersionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLkeVersions200ApplicationJson)
    ], GetLkeVersionsResponse.prototype, "getLkeVersions200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLkeVersionsDefaultApplicationJson)
    ], GetLkeVersionsResponse.prototype, "getLkeVersionsDefaultApplicationJsonObject", void 0);
    return GetLkeVersionsResponse;
}(SpeakeasyBase));
export { GetLkeVersionsResponse };
