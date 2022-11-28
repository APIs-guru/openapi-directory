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
var StopScreenshotsTestPathParams = /** @class */ (function (_super) {
    __extends(StopScreenshotsTestPathParams, _super);
    function StopScreenshotsTestPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=test_id" }),
        __metadata("design:type", String)
    ], StopScreenshotsTestPathParams.prototype, "testId", void 0);
    return StopScreenshotsTestPathParams;
}(SpeakeasyBase));
export { StopScreenshotsTestPathParams };
var StopScreenshotsTestSecurity = /** @class */ (function (_super) {
    __extends(StopScreenshotsTestSecurity, _super);
    function StopScreenshotsTestSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], StopScreenshotsTestSecurity.prototype, "basicAuth", void 0);
    return StopScreenshotsTestSecurity;
}(SpeakeasyBase));
export { StopScreenshotsTestSecurity };
var StopScreenshotsTestRequest = /** @class */ (function (_super) {
    __extends(StopScreenshotsTestRequest, _super);
    function StopScreenshotsTestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StopScreenshotsTestPathParams)
    ], StopScreenshotsTestRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StopScreenshotsTestSecurity)
    ], StopScreenshotsTestRequest.prototype, "security", void 0);
    return StopScreenshotsTestRequest;
}(SpeakeasyBase));
export { StopScreenshotsTestRequest };
var StopScreenshotsTestResponse = /** @class */ (function (_super) {
    __extends(StopScreenshotsTestResponse, _super);
    function StopScreenshotsTestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StopScreenshotsTestResponse.prototype, "accessDenied", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StopScreenshotsTestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StopScreenshotsTestResponse.prototype, "forbidden", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StopScreenshotsTestResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StopScreenshotsTestResponse.prototype, "stopScreenshotNotFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StopScreenshotsTestResponse.prototype, "stopScreenshotSuccess", void 0);
    return StopScreenshotsTestResponse;
}(SpeakeasyBase));
export { StopScreenshotsTestResponse };
