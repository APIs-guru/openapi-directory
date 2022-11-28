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
var CreateQueryJobQueryParams = /** @class */ (function (_super) {
    __extends(CreateQueryJobQueryParams, _super);
    function CreateQueryJobQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], CreateQueryJobQueryParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=project-id" }),
        __metadata("design:type", Array)
    ], CreateQueryJobQueryParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projects-list" }),
        __metadata("design:type", String)
    ], CreateQueryJobQueryParams.prototype, "projectsList", void 0);
    return CreateQueryJobQueryParams;
}(SpeakeasyBase));
export { CreateQueryJobQueryParams };
var CreateQueryJobSecurity = /** @class */ (function (_super) {
    __extends(CreateQueryJobSecurity, _super);
    function CreateQueryJobSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeAccessToken)
    ], CreateQueryJobSecurity.prototype, "accessToken", void 0);
    return CreateQueryJobSecurity;
}(SpeakeasyBase));
export { CreateQueryJobSecurity };
var CreateQueryJobRequest = /** @class */ (function (_super) {
    __extends(CreateQueryJobRequest, _super);
    function CreateQueryJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateQueryJobQueryParams)
    ], CreateQueryJobRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/plain" }),
        __metadata("design:type", String)
    ], CreateQueryJobRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateQueryJobSecurity)
    ], CreateQueryJobRequest.prototype, "security", void 0);
    return CreateQueryJobRequest;
}(SpeakeasyBase));
export { CreateQueryJobRequest };
var CreateQueryJobResponse = /** @class */ (function (_super) {
    __extends(CreateQueryJobResponse, _super);
    function CreateQueryJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateQueryJobResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateQueryJobResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], CreateQueryJobResponse.prototype, "operation", void 0);
    return CreateQueryJobResponse;
}(SpeakeasyBase));
export { CreateQueryJobResponse };
