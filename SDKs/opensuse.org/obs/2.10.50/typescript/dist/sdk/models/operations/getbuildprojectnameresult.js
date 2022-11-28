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
var GetBuildProjectNameResultPathParams = /** @class */ (function (_super) {
    __extends(GetBuildProjectNameResultPathParams, _super);
    function GetBuildProjectNameResultPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_name" }),
        __metadata("design:type", String)
    ], GetBuildProjectNameResultPathParams.prototype, "projectName", void 0);
    return GetBuildProjectNameResultPathParams;
}(SpeakeasyBase));
export { GetBuildProjectNameResultPathParams };
export var GetBuildProjectNameResultViewEnum;
(function (GetBuildProjectNameResultViewEnum) {
    GetBuildProjectNameResultViewEnum["Summary"] = "summary";
    GetBuildProjectNameResultViewEnum["Status"] = "status";
    GetBuildProjectNameResultViewEnum["Binarylist"] = "binarylist";
})(GetBuildProjectNameResultViewEnum || (GetBuildProjectNameResultViewEnum = {}));
var GetBuildProjectNameResultQueryParams = /** @class */ (function (_super) {
    __extends(GetBuildProjectNameResultQueryParams, _super);
    function GetBuildProjectNameResultQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=arch" }),
        __metadata("design:type", String)
    ], GetBuildProjectNameResultQueryParams.prototype, "arch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lastbuild" }),
        __metadata("design:type", Boolean)
    ], GetBuildProjectNameResultQueryParams.prototype, "lastbuild", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locallink" }),
        __metadata("design:type", Boolean)
    ], GetBuildProjectNameResultQueryParams.prototype, "locallink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=multibuild" }),
        __metadata("design:type", Boolean)
    ], GetBuildProjectNameResultQueryParams.prototype, "multibuild", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=package" }),
        __metadata("design:type", String)
    ], GetBuildProjectNameResultQueryParams.prototype, "package", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=repository" }),
        __metadata("design:type", String)
    ], GetBuildProjectNameResultQueryParams.prototype, "repository", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], GetBuildProjectNameResultQueryParams.prototype, "view", void 0);
    return GetBuildProjectNameResultQueryParams;
}(SpeakeasyBase));
export { GetBuildProjectNameResultQueryParams };
var GetBuildProjectNameResultSecurity = /** @class */ (function (_super) {
    __extends(GetBuildProjectNameResultSecurity, _super);
    function GetBuildProjectNameResultSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuthentication)
    ], GetBuildProjectNameResultSecurity.prototype, "basicAuthentication", void 0);
    return GetBuildProjectNameResultSecurity;
}(SpeakeasyBase));
export { GetBuildProjectNameResultSecurity };
var GetBuildProjectNameResultRequest = /** @class */ (function (_super) {
    __extends(GetBuildProjectNameResultRequest, _super);
    function GetBuildProjectNameResultRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBuildProjectNameResultPathParams)
    ], GetBuildProjectNameResultRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBuildProjectNameResultQueryParams)
    ], GetBuildProjectNameResultRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBuildProjectNameResultSecurity)
    ], GetBuildProjectNameResultRequest.prototype, "security", void 0);
    return GetBuildProjectNameResultRequest;
}(SpeakeasyBase));
export { GetBuildProjectNameResultRequest };
var GetBuildProjectNameResultResponse = /** @class */ (function (_super) {
    __extends(GetBuildProjectNameResultResponse, _super);
    function GetBuildProjectNameResultResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetBuildProjectNameResultResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBuildProjectNameResultResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBuildProjectNameResultResponse.prototype, "statusCode", void 0);
    return GetBuildProjectNameResultResponse;
}(SpeakeasyBase));
export { GetBuildProjectNameResultResponse };
