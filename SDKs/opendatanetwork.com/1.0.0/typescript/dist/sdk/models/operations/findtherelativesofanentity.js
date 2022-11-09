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
export var FindTheRelativesOfAnEntityRelationEnum;
(function (FindTheRelativesOfAnEntityRelationEnum) {
    FindTheRelativesOfAnEntityRelationEnum["Parent"] = "parent";
    FindTheRelativesOfAnEntityRelationEnum["Child"] = "child";
    FindTheRelativesOfAnEntityRelationEnum["Sibling"] = "sibling";
    FindTheRelativesOfAnEntityRelationEnum["Peer"] = "peer";
})(FindTheRelativesOfAnEntityRelationEnum || (FindTheRelativesOfAnEntityRelationEnum = {}));
var FindTheRelativesOfAnEntityPathParams = /** @class */ (function (_super) {
    __extends(FindTheRelativesOfAnEntityPathParams, _super);
    function FindTheRelativesOfAnEntityPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=relation" }),
        __metadata("design:type", String)
    ], FindTheRelativesOfAnEntityPathParams.prototype, "relation", void 0);
    return FindTheRelativesOfAnEntityPathParams;
}(SpeakeasyBase));
export { FindTheRelativesOfAnEntityPathParams };
var FindTheRelativesOfAnEntityQueryParams = /** @class */ (function (_super) {
    __extends(FindTheRelativesOfAnEntityQueryParams, _super);
    function FindTheRelativesOfAnEntityQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=app_token" }),
        __metadata("design:type", String)
    ], FindTheRelativesOfAnEntityQueryParams.prototype, "appToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=entity_id" }),
        __metadata("design:type", String)
    ], FindTheRelativesOfAnEntityQueryParams.prototype, "entityId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], FindTheRelativesOfAnEntityQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=variable_id" }),
        __metadata("design:type", String)
    ], FindTheRelativesOfAnEntityQueryParams.prototype, "variableId", void 0);
    return FindTheRelativesOfAnEntityQueryParams;
}(SpeakeasyBase));
export { FindTheRelativesOfAnEntityQueryParams };
var FindTheRelativesOfAnEntityHeaders = /** @class */ (function (_super) {
    __extends(FindTheRelativesOfAnEntityHeaders, _super);
    function FindTheRelativesOfAnEntityHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-App-Token" }),
        __metadata("design:type", String)
    ], FindTheRelativesOfAnEntityHeaders.prototype, "xAppToken", void 0);
    return FindTheRelativesOfAnEntityHeaders;
}(SpeakeasyBase));
export { FindTheRelativesOfAnEntityHeaders };
var FindTheRelativesOfAnEntityRequest = /** @class */ (function (_super) {
    __extends(FindTheRelativesOfAnEntityRequest, _super);
    function FindTheRelativesOfAnEntityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FindTheRelativesOfAnEntityPathParams)
    ], FindTheRelativesOfAnEntityRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FindTheRelativesOfAnEntityQueryParams)
    ], FindTheRelativesOfAnEntityRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FindTheRelativesOfAnEntityHeaders)
    ], FindTheRelativesOfAnEntityRequest.prototype, "headers", void 0);
    return FindTheRelativesOfAnEntityRequest;
}(SpeakeasyBase));
export { FindTheRelativesOfAnEntityRequest };
var FindTheRelativesOfAnEntityResponse = /** @class */ (function (_super) {
    __extends(FindTheRelativesOfAnEntityResponse, _super);
    function FindTheRelativesOfAnEntityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FindTheRelativesOfAnEntityResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FindTheRelativesOfAnEntityResponse.prototype, "statusCode", void 0);
    return FindTheRelativesOfAnEntityResponse;
}(SpeakeasyBase));
export { FindTheRelativesOfAnEntityResponse };
