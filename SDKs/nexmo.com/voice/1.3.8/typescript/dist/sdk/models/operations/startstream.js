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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var StartStreamPathParams = /** @class */ (function (_super) {
    __extends(StartStreamPathParams, _super);
    function StartStreamPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=uuid" }),
        __metadata("design:type", String)
    ], StartStreamPathParams.prototype, "uuid", void 0);
    return StartStreamPathParams;
}(SpeakeasyBase));
export { StartStreamPathParams };
var StartStreamSecurity = /** @class */ (function (_super) {
    __extends(StartStreamSecurity, _super);
    function StartStreamSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], StartStreamSecurity.prototype, "bearerAuth", void 0);
    return StartStreamSecurity;
}(SpeakeasyBase));
export { StartStreamSecurity };
var StartStreamRequest = /** @class */ (function (_super) {
    __extends(StartStreamRequest, _super);
    function StartStreamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", StartStreamPathParams)
    ], StartStreamRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.StartStreamRequest)
    ], StartStreamRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StartStreamSecurity)
    ], StartStreamRequest.prototype, "security", void 0);
    return StartStreamRequest;
}(SpeakeasyBase));
export { StartStreamRequest };
var StartStreamResponse = /** @class */ (function (_super) {
    __extends(StartStreamResponse, _super);
    function StartStreamResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], StartStreamResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.StartStreamResponse)
    ], StartStreamResponse.prototype, "startStreamResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], StartStreamResponse.prototype, "statusCode", void 0);
    return StartStreamResponse;
}(SpeakeasyBase));
export { StartStreamResponse };
