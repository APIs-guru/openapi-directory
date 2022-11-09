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
var GetActionPackageRelationshipsListQueryParams = /** @class */ (function (_super) {
    __extends(GetActionPackageRelationshipsListQueryParams, _super);
    function GetActionPackageRelationshipsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], GetActionPackageRelationshipsListQueryParams.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=id2" }),
        __metadata("design:type", String)
    ], GetActionPackageRelationshipsListQueryParams.prototype, "id2", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=rel" }),
        __metadata("design:type", String)
    ], GetActionPackageRelationshipsListQueryParams.prototype, "rel", void 0);
    return GetActionPackageRelationshipsListQueryParams;
}(SpeakeasyBase));
export { GetActionPackageRelationshipsListQueryParams };
var GetActionPackageRelationshipsListRequest = /** @class */ (function (_super) {
    __extends(GetActionPackageRelationshipsListRequest, _super);
    function GetActionPackageRelationshipsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetActionPackageRelationshipsListQueryParams)
    ], GetActionPackageRelationshipsListRequest.prototype, "queryParams", void 0);
    return GetActionPackageRelationshipsListRequest;
}(SpeakeasyBase));
export { GetActionPackageRelationshipsListRequest };
var GetActionPackageRelationshipsListResponse = /** @class */ (function (_super) {
    __extends(GetActionPackageRelationshipsListResponse, _super);
    function GetActionPackageRelationshipsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetActionPackageRelationshipsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetActionPackageRelationshipsListResponse.prototype, "statusCode", void 0);
    return GetActionPackageRelationshipsListResponse;
}(SpeakeasyBase));
export { GetActionPackageRelationshipsListResponse };
