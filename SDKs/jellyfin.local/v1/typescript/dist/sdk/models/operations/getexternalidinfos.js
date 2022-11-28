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
var GetExternalIdInfosPathParams = /** @class */ (function (_super) {
    __extends(GetExternalIdInfosPathParams, _super);
    function GetExternalIdInfosPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], GetExternalIdInfosPathParams.prototype, "itemId", void 0);
    return GetExternalIdInfosPathParams;
}(SpeakeasyBase));
export { GetExternalIdInfosPathParams };
var GetExternalIdInfosSecurity = /** @class */ (function (_super) {
    __extends(GetExternalIdInfosSecurity, _super);
    function GetExternalIdInfosSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetExternalIdInfosSecurity.prototype, "customAuthentication", void 0);
    return GetExternalIdInfosSecurity;
}(SpeakeasyBase));
export { GetExternalIdInfosSecurity };
var GetExternalIdInfosRequest = /** @class */ (function (_super) {
    __extends(GetExternalIdInfosRequest, _super);
    function GetExternalIdInfosRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetExternalIdInfosPathParams)
    ], GetExternalIdInfosRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetExternalIdInfosSecurity)
    ], GetExternalIdInfosRequest.prototype, "security", void 0);
    return GetExternalIdInfosRequest;
}(SpeakeasyBase));
export { GetExternalIdInfosRequest };
var GetExternalIdInfosResponse = /** @class */ (function (_super) {
    __extends(GetExternalIdInfosResponse, _super);
    function GetExternalIdInfosResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetExternalIdInfosResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.ExternalIdInfo }),
        __metadata("design:type", Array)
    ], GetExternalIdInfosResponse.prototype, "externalIdInfos", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetExternalIdInfosResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetExternalIdInfosResponse.prototype, "statusCode", void 0);
    return GetExternalIdInfosResponse;
}(SpeakeasyBase));
export { GetExternalIdInfosResponse };
