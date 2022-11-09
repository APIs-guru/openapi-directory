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
var GetRequestViewEqualCollectionQueryParams = /** @class */ (function (_super) {
    __extends(GetRequestViewEqualCollectionQueryParams, _super);
    function GetRequestViewEqualCollectionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", String)
    ], GetRequestViewEqualCollectionQueryParams.prototype, "ids", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetRequestViewEqualCollectionQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=package" }),
        __metadata("design:type", String)
    ], GetRequestViewEqualCollectionQueryParams.prototype, "package", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=project" }),
        __metadata("design:type", String)
    ], GetRequestViewEqualCollectionQueryParams.prototype, "project", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=roles" }),
        __metadata("design:type", String)
    ], GetRequestViewEqualCollectionQueryParams.prototype, "roles", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=states" }),
        __metadata("design:type", String)
    ], GetRequestViewEqualCollectionQueryParams.prototype, "states", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=types" }),
        __metadata("design:type", String)
    ], GetRequestViewEqualCollectionQueryParams.prototype, "types", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=user" }),
        __metadata("design:type", String)
    ], GetRequestViewEqualCollectionQueryParams.prototype, "user", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=withfullhistory" }),
        __metadata("design:type", String)
    ], GetRequestViewEqualCollectionQueryParams.prototype, "withfullhistory", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=withhistory" }),
        __metadata("design:type", String)
    ], GetRequestViewEqualCollectionQueryParams.prototype, "withhistory", void 0);
    return GetRequestViewEqualCollectionQueryParams;
}(SpeakeasyBase));
export { GetRequestViewEqualCollectionQueryParams };
var GetRequestViewEqualCollectionSecurity = /** @class */ (function (_super) {
    __extends(GetRequestViewEqualCollectionSecurity, _super);
    function GetRequestViewEqualCollectionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuthentication)
    ], GetRequestViewEqualCollectionSecurity.prototype, "basicAuthentication", void 0);
    return GetRequestViewEqualCollectionSecurity;
}(SpeakeasyBase));
export { GetRequestViewEqualCollectionSecurity };
var GetRequestViewEqualCollectionRequest = /** @class */ (function (_super) {
    __extends(GetRequestViewEqualCollectionRequest, _super);
    function GetRequestViewEqualCollectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetRequestViewEqualCollectionQueryParams)
    ], GetRequestViewEqualCollectionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetRequestViewEqualCollectionSecurity)
    ], GetRequestViewEqualCollectionRequest.prototype, "security", void 0);
    return GetRequestViewEqualCollectionRequest;
}(SpeakeasyBase));
export { GetRequestViewEqualCollectionRequest };
var GetRequestViewEqualCollectionResponse = /** @class */ (function (_super) {
    __extends(GetRequestViewEqualCollectionResponse, _super);
    function GetRequestViewEqualCollectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetRequestViewEqualCollectionResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetRequestViewEqualCollectionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetRequestViewEqualCollectionResponse.prototype, "statusCode", void 0);
    return GetRequestViewEqualCollectionResponse;
}(SpeakeasyBase));
export { GetRequestViewEqualCollectionResponse };
