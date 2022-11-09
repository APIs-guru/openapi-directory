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
var GetEventPathParams = /** @class */ (function (_super) {
    __extends(GetEventPathParams, _super);
    function GetEventPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetEventPathParams.prototype, "id", void 0);
    return GetEventPathParams;
}(SpeakeasyBase));
export { GetEventPathParams };
var GetEventSecurity = /** @class */ (function (_super) {
    __extends(GetEventSecurity, _super);
    function GetEventSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], GetEventSecurity.prototype, "basicAuth", void 0);
    return GetEventSecurity;
}(SpeakeasyBase));
export { GetEventSecurity };
var GetEventRequest = /** @class */ (function (_super) {
    __extends(GetEventRequest, _super);
    function GetEventRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetEventPathParams)
    ], GetEventRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetEventSecurity)
    ], GetEventRequest.prototype, "security", void 0);
    return GetEventRequest;
}(SpeakeasyBase));
export { GetEventRequest };
var GetEventResponse = /** @class */ (function (_super) {
    __extends(GetEventResponse, _super);
    function GetEventResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.AuditEvent)
    ], GetEventResponse.prototype, "auditEvent", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetEventResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorNotFound)
    ], GetEventResponse.prototype, "errorNotFound", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorUnauthorized)
    ], GetEventResponse.prototype, "errorUnauthorized", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetEventResponse.prototype, "statusCode", void 0);
    return GetEventResponse;
}(SpeakeasyBase));
export { GetEventResponse };
