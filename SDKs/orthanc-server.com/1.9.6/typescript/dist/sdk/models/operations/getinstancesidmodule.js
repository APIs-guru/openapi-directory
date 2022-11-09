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
var GetInstancesIdModulePathParams = /** @class */ (function (_super) {
    __extends(GetInstancesIdModulePathParams, _super);
    function GetInstancesIdModulePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetInstancesIdModulePathParams.prototype, "id", void 0);
    return GetInstancesIdModulePathParams;
}(SpeakeasyBase));
export { GetInstancesIdModulePathParams };
var GetInstancesIdModuleQueryParams = /** @class */ (function (_super) {
    __extends(GetInstancesIdModuleQueryParams, _super);
    function GetInstancesIdModuleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ignore-length" }),
        __metadata("design:type", Array)
    ], GetInstancesIdModuleQueryParams.prototype, "ignoreLength", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=short" }),
        __metadata("design:type", Boolean)
    ], GetInstancesIdModuleQueryParams.prototype, "short", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=simplify" }),
        __metadata("design:type", Boolean)
    ], GetInstancesIdModuleQueryParams.prototype, "simplify", void 0);
    return GetInstancesIdModuleQueryParams;
}(SpeakeasyBase));
export { GetInstancesIdModuleQueryParams };
var GetInstancesIdModuleRequest = /** @class */ (function (_super) {
    __extends(GetInstancesIdModuleRequest, _super);
    function GetInstancesIdModuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetInstancesIdModulePathParams)
    ], GetInstancesIdModuleRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetInstancesIdModuleQueryParams)
    ], GetInstancesIdModuleRequest.prototype, "queryParams", void 0);
    return GetInstancesIdModuleRequest;
}(SpeakeasyBase));
export { GetInstancesIdModuleRequest };
var GetInstancesIdModuleResponse = /** @class */ (function (_super) {
    __extends(GetInstancesIdModuleResponse, _super);
    function GetInstancesIdModuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetInstancesIdModuleResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetInstancesIdModuleResponse.prototype, "getInstancesIdModule200ApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetInstancesIdModuleResponse.prototype, "statusCode", void 0);
    return GetInstancesIdModuleResponse;
}(SpeakeasyBase));
export { GetInstancesIdModuleResponse };
