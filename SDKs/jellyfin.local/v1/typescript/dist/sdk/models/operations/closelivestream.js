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
var CloseLiveStreamQueryParams = /** @class */ (function (_super) {
    __extends(CloseLiveStreamQueryParams, _super);
    function CloseLiveStreamQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=liveStreamId" }),
        __metadata("design:type", String)
    ], CloseLiveStreamQueryParams.prototype, "liveStreamId", void 0);
    return CloseLiveStreamQueryParams;
}(SpeakeasyBase));
export { CloseLiveStreamQueryParams };
var CloseLiveStreamSecurity = /** @class */ (function (_super) {
    __extends(CloseLiveStreamSecurity, _super);
    function CloseLiveStreamSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], CloseLiveStreamSecurity.prototype, "customAuthentication", void 0);
    return CloseLiveStreamSecurity;
}(SpeakeasyBase));
export { CloseLiveStreamSecurity };
var CloseLiveStreamRequest = /** @class */ (function (_super) {
    __extends(CloseLiveStreamRequest, _super);
    function CloseLiveStreamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloseLiveStreamQueryParams)
    ], CloseLiveStreamRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloseLiveStreamSecurity)
    ], CloseLiveStreamRequest.prototype, "security", void 0);
    return CloseLiveStreamRequest;
}(SpeakeasyBase));
export { CloseLiveStreamRequest };
var CloseLiveStreamResponse = /** @class */ (function (_super) {
    __extends(CloseLiveStreamResponse, _super);
    function CloseLiveStreamResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloseLiveStreamResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloseLiveStreamResponse.prototype, "statusCode", void 0);
    return CloseLiveStreamResponse;
}(SpeakeasyBase));
export { CloseLiveStreamResponse };
