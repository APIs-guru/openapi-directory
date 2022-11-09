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
var StopTalkPathParams = /** @class */ (function (_super) {
    __extends(StopTalkPathParams, _super);
    function StopTalkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=uuid" }),
        __metadata("design:type", String)
    ], StopTalkPathParams.prototype, "uuid", void 0);
    return StopTalkPathParams;
}(SpeakeasyBase));
export { StopTalkPathParams };
var StopTalkSecurity = /** @class */ (function (_super) {
    __extends(StopTalkSecurity, _super);
    function StopTalkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], StopTalkSecurity.prototype, "bearerAuth", void 0);
    return StopTalkSecurity;
}(SpeakeasyBase));
export { StopTalkSecurity };
var StopTalkRequest = /** @class */ (function (_super) {
    __extends(StopTalkRequest, _super);
    function StopTalkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", StopTalkPathParams)
    ], StopTalkRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StopTalkSecurity)
    ], StopTalkRequest.prototype, "security", void 0);
    return StopTalkRequest;
}(SpeakeasyBase));
export { StopTalkRequest };
var StopTalkResponse = /** @class */ (function (_super) {
    __extends(StopTalkResponse, _super);
    function StopTalkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], StopTalkResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], StopTalkResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.StopTalkResponse)
    ], StopTalkResponse.prototype, "stopTalkResponse", void 0);
    return StopTalkResponse;
}(SpeakeasyBase));
export { StopTalkResponse };
