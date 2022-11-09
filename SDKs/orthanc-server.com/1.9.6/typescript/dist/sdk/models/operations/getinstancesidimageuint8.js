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
var GetInstancesIdImageUint8PathParams = /** @class */ (function (_super) {
    __extends(GetInstancesIdImageUint8PathParams, _super);
    function GetInstancesIdImageUint8PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetInstancesIdImageUint8PathParams.prototype, "id", void 0);
    return GetInstancesIdImageUint8PathParams;
}(SpeakeasyBase));
export { GetInstancesIdImageUint8PathParams };
var GetInstancesIdImageUint8QueryParams = /** @class */ (function (_super) {
    __extends(GetInstancesIdImageUint8QueryParams, _super);
    function GetInstancesIdImageUint8QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quality" }),
        __metadata("design:type", Number)
    ], GetInstancesIdImageUint8QueryParams.prototype, "quality", void 0);
    return GetInstancesIdImageUint8QueryParams;
}(SpeakeasyBase));
export { GetInstancesIdImageUint8QueryParams };
var GetInstancesIdImageUint8Headers = /** @class */ (function (_super) {
    __extends(GetInstancesIdImageUint8Headers, _super);
    function GetInstancesIdImageUint8Headers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], GetInstancesIdImageUint8Headers.prototype, "accept", void 0);
    return GetInstancesIdImageUint8Headers;
}(SpeakeasyBase));
export { GetInstancesIdImageUint8Headers };
var GetInstancesIdImageUint8Request = /** @class */ (function (_super) {
    __extends(GetInstancesIdImageUint8Request, _super);
    function GetInstancesIdImageUint8Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetInstancesIdImageUint8PathParams)
    ], GetInstancesIdImageUint8Request.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetInstancesIdImageUint8QueryParams)
    ], GetInstancesIdImageUint8Request.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetInstancesIdImageUint8Headers)
    ], GetInstancesIdImageUint8Request.prototype, "headers", void 0);
    return GetInstancesIdImageUint8Request;
}(SpeakeasyBase));
export { GetInstancesIdImageUint8Request };
var GetInstancesIdImageUint8Response = /** @class */ (function (_super) {
    __extends(GetInstancesIdImageUint8Response, _super);
    function GetInstancesIdImageUint8Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetInstancesIdImageUint8Response.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetInstancesIdImageUint8Response.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetInstancesIdImageUint8Response.prototype, "statusCode", void 0);
    return GetInstancesIdImageUint8Response;
}(SpeakeasyBase));
export { GetInstancesIdImageUint8Response };
