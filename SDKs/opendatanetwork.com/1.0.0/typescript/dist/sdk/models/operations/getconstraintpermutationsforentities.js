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
var GetConstraintPermutationsForEntitiesPathParams = /** @class */ (function (_super) {
    __extends(GetConstraintPermutationsForEntitiesPathParams, _super);
    function GetConstraintPermutationsForEntitiesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=variable" }),
        __metadata("design:type", String)
    ], GetConstraintPermutationsForEntitiesPathParams.prototype, "variable", void 0);
    return GetConstraintPermutationsForEntitiesPathParams;
}(SpeakeasyBase));
export { GetConstraintPermutationsForEntitiesPathParams };
var GetConstraintPermutationsForEntitiesQueryParams = /** @class */ (function (_super) {
    __extends(GetConstraintPermutationsForEntitiesQueryParams, _super);
    function GetConstraintPermutationsForEntitiesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=app_token" }),
        __metadata("design:type", String)
    ], GetConstraintPermutationsForEntitiesQueryParams.prototype, "appToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=constraint" }),
        __metadata("design:type", String)
    ], GetConstraintPermutationsForEntitiesQueryParams.prototype, "constraint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=entity_id" }),
        __metadata("design:type", String)
    ], GetConstraintPermutationsForEntitiesQueryParams.prototype, "entityId", void 0);
    return GetConstraintPermutationsForEntitiesQueryParams;
}(SpeakeasyBase));
export { GetConstraintPermutationsForEntitiesQueryParams };
var GetConstraintPermutationsForEntitiesHeaders = /** @class */ (function (_super) {
    __extends(GetConstraintPermutationsForEntitiesHeaders, _super);
    function GetConstraintPermutationsForEntitiesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-App-Token" }),
        __metadata("design:type", String)
    ], GetConstraintPermutationsForEntitiesHeaders.prototype, "xAppToken", void 0);
    return GetConstraintPermutationsForEntitiesHeaders;
}(SpeakeasyBase));
export { GetConstraintPermutationsForEntitiesHeaders };
var GetConstraintPermutationsForEntitiesRequest = /** @class */ (function (_super) {
    __extends(GetConstraintPermutationsForEntitiesRequest, _super);
    function GetConstraintPermutationsForEntitiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetConstraintPermutationsForEntitiesPathParams)
    ], GetConstraintPermutationsForEntitiesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetConstraintPermutationsForEntitiesQueryParams)
    ], GetConstraintPermutationsForEntitiesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetConstraintPermutationsForEntitiesHeaders)
    ], GetConstraintPermutationsForEntitiesRequest.prototype, "headers", void 0);
    return GetConstraintPermutationsForEntitiesRequest;
}(SpeakeasyBase));
export { GetConstraintPermutationsForEntitiesRequest };
var GetConstraintPermutationsForEntitiesResponse = /** @class */ (function (_super) {
    __extends(GetConstraintPermutationsForEntitiesResponse, _super);
    function GetConstraintPermutationsForEntitiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetConstraintPermutationsForEntitiesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetConstraintPermutationsForEntitiesResponse.prototype, "statusCode", void 0);
    return GetConstraintPermutationsForEntitiesResponse;
}(SpeakeasyBase));
export { GetConstraintPermutationsForEntitiesResponse };
