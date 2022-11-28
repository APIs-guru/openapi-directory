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
var GetRecordingPathParams = /** @class */ (function (_super) {
    __extends(GetRecordingPathParams, _super);
    function GetRecordingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recordingId" }),
        __metadata("design:type", String)
    ], GetRecordingPathParams.prototype, "recordingId", void 0);
    return GetRecordingPathParams;
}(SpeakeasyBase));
export { GetRecordingPathParams };
var GetRecordingQueryParams = /** @class */ (function (_super) {
    __extends(GetRecordingQueryParams, _super);
    function GetRecordingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], GetRecordingQueryParams.prototype, "userId", void 0);
    return GetRecordingQueryParams;
}(SpeakeasyBase));
export { GetRecordingQueryParams };
var GetRecordingSecurity = /** @class */ (function (_super) {
    __extends(GetRecordingSecurity, _super);
    function GetRecordingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetRecordingSecurity.prototype, "customAuthentication", void 0);
    return GetRecordingSecurity;
}(SpeakeasyBase));
export { GetRecordingSecurity };
var GetRecordingRequest = /** @class */ (function (_super) {
    __extends(GetRecordingRequest, _super);
    function GetRecordingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRecordingPathParams)
    ], GetRecordingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRecordingQueryParams)
    ], GetRecordingRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRecordingSecurity)
    ], GetRecordingRequest.prototype, "security", void 0);
    return GetRecordingRequest;
}(SpeakeasyBase));
export { GetRecordingRequest };
var GetRecordingResponse = /** @class */ (function (_super) {
    __extends(GetRecordingResponse, _super);
    function GetRecordingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BaseItemDto)
    ], GetRecordingResponse.prototype, "baseItemDto", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRecordingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRecordingResponse.prototype, "statusCode", void 0);
    return GetRecordingResponse;
}(SpeakeasyBase));
export { GetRecordingResponse };
