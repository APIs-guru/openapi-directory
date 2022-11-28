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
var StopEncodingProcessQueryParams = /** @class */ (function (_super) {
    __extends(StopEncodingProcessQueryParams, _super);
    function StopEncodingProcessQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceId" }),
        __metadata("design:type", String)
    ], StopEncodingProcessQueryParams.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=playSessionId" }),
        __metadata("design:type", String)
    ], StopEncodingProcessQueryParams.prototype, "playSessionId", void 0);
    return StopEncodingProcessQueryParams;
}(SpeakeasyBase));
export { StopEncodingProcessQueryParams };
var StopEncodingProcessSecurity = /** @class */ (function (_super) {
    __extends(StopEncodingProcessSecurity, _super);
    function StopEncodingProcessSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], StopEncodingProcessSecurity.prototype, "customAuthentication", void 0);
    return StopEncodingProcessSecurity;
}(SpeakeasyBase));
export { StopEncodingProcessSecurity };
var StopEncodingProcessRequest = /** @class */ (function (_super) {
    __extends(StopEncodingProcessRequest, _super);
    function StopEncodingProcessRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StopEncodingProcessQueryParams)
    ], StopEncodingProcessRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StopEncodingProcessSecurity)
    ], StopEncodingProcessRequest.prototype, "security", void 0);
    return StopEncodingProcessRequest;
}(SpeakeasyBase));
export { StopEncodingProcessRequest };
var StopEncodingProcessResponse = /** @class */ (function (_super) {
    __extends(StopEncodingProcessResponse, _super);
    function StopEncodingProcessResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StopEncodingProcessResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StopEncodingProcessResponse.prototype, "statusCode", void 0);
    return StopEncodingProcessResponse;
}(SpeakeasyBase));
export { StopEncodingProcessResponse };
