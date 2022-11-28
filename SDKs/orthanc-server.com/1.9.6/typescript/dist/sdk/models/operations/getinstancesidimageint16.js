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
var GetInstancesIdImageInt16PathParams = /** @class */ (function (_super) {
    __extends(GetInstancesIdImageInt16PathParams, _super);
    function GetInstancesIdImageInt16PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetInstancesIdImageInt16PathParams.prototype, "id", void 0);
    return GetInstancesIdImageInt16PathParams;
}(SpeakeasyBase));
export { GetInstancesIdImageInt16PathParams };
var GetInstancesIdImageInt16QueryParams = /** @class */ (function (_super) {
    __extends(GetInstancesIdImageInt16QueryParams, _super);
    function GetInstancesIdImageInt16QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quality" }),
        __metadata("design:type", Number)
    ], GetInstancesIdImageInt16QueryParams.prototype, "quality", void 0);
    return GetInstancesIdImageInt16QueryParams;
}(SpeakeasyBase));
export { GetInstancesIdImageInt16QueryParams };
var GetInstancesIdImageInt16Headers = /** @class */ (function (_super) {
    __extends(GetInstancesIdImageInt16Headers, _super);
    function GetInstancesIdImageInt16Headers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], GetInstancesIdImageInt16Headers.prototype, "accept", void 0);
    return GetInstancesIdImageInt16Headers;
}(SpeakeasyBase));
export { GetInstancesIdImageInt16Headers };
var GetInstancesIdImageInt16Request = /** @class */ (function (_super) {
    __extends(GetInstancesIdImageInt16Request, _super);
    function GetInstancesIdImageInt16Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstancesIdImageInt16PathParams)
    ], GetInstancesIdImageInt16Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstancesIdImageInt16QueryParams)
    ], GetInstancesIdImageInt16Request.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstancesIdImageInt16Headers)
    ], GetInstancesIdImageInt16Request.prototype, "headers", void 0);
    return GetInstancesIdImageInt16Request;
}(SpeakeasyBase));
export { GetInstancesIdImageInt16Request };
var GetInstancesIdImageInt16Response = /** @class */ (function (_super) {
    __extends(GetInstancesIdImageInt16Response, _super);
    function GetInstancesIdImageInt16Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetInstancesIdImageInt16Response.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetInstancesIdImageInt16Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetInstancesIdImageInt16Response.prototype, "statusCode", void 0);
    return GetInstancesIdImageInt16Response;
}(SpeakeasyBase));
export { GetInstancesIdImageInt16Response };
