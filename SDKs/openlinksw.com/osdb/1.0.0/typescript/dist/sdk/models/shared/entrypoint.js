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
import { EntryPointParameter } from "./entrypointparameter";
export var EntryPointHttpMethodEnum;
(function (EntryPointHttpMethodEnum) {
    EntryPointHttpMethodEnum["Get"] = "GET";
    EntryPointHttpMethodEnum["Put"] = "PUT";
    EntryPointHttpMethodEnum["Post"] = "POST";
    EntryPointHttpMethodEnum["Delete"] = "DELETE";
})(EntryPointHttpMethodEnum || (EntryPointHttpMethodEnum = {}));
var EntryPoint = /** @class */ (function (_super) {
    __extends(EntryPoint, _super);
    function EntryPoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content_types" }),
        __metadata("design:type", Array)
    ], EntryPoint.prototype, "contentTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], EntryPoint.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encoding_types" }),
        __metadata("design:type", Array)
    ], EntryPoint.prototype, "encodingTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=http_method" }),
        __metadata("design:type", String)
    ], EntryPoint.prototype, "httpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EntryPoint.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters", elemType: EntryPointParameter }),
        __metadata("design:type", Array)
    ], EntryPoint.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], EntryPoint.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url_template" }),
        __metadata("design:type", String)
    ], EntryPoint.prototype, "urlTemplate", void 0);
    return EntryPoint;
}(SpeakeasyBase));
export { EntryPoint };
