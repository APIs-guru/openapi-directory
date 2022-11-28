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
var GetRecordingGroupsQueryParams = /** @class */ (function (_super) {
    __extends(GetRecordingGroupsQueryParams, _super);
    function GetRecordingGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], GetRecordingGroupsQueryParams.prototype, "userId", void 0);
    return GetRecordingGroupsQueryParams;
}(SpeakeasyBase));
export { GetRecordingGroupsQueryParams };
var GetRecordingGroupsSecurity = /** @class */ (function (_super) {
    __extends(GetRecordingGroupsSecurity, _super);
    function GetRecordingGroupsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetRecordingGroupsSecurity.prototype, "customAuthentication", void 0);
    return GetRecordingGroupsSecurity;
}(SpeakeasyBase));
export { GetRecordingGroupsSecurity };
var GetRecordingGroupsRequest = /** @class */ (function (_super) {
    __extends(GetRecordingGroupsRequest, _super);
    function GetRecordingGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRecordingGroupsQueryParams)
    ], GetRecordingGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRecordingGroupsSecurity)
    ], GetRecordingGroupsRequest.prototype, "security", void 0);
    return GetRecordingGroupsRequest;
}(SpeakeasyBase));
export { GetRecordingGroupsRequest };
var GetRecordingGroupsResponse = /** @class */ (function (_super) {
    __extends(GetRecordingGroupsResponse, _super);
    function GetRecordingGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BaseItemDtoQueryResult)
    ], GetRecordingGroupsResponse.prototype, "baseItemDtoQueryResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRecordingGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRecordingGroupsResponse.prototype, "statusCode", void 0);
    return GetRecordingGroupsResponse;
}(SpeakeasyBase));
export { GetRecordingGroupsResponse };
