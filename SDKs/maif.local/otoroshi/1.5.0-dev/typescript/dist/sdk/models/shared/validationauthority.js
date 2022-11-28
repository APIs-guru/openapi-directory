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
// ValidationAuthority
/**
 * Settings to access a validation authority server
**/
var ValidationAuthority = /** @class */ (function (_super) {
    __extends(ValidationAuthority, _super);
    function ValidationAuthority() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alwaysValid" }),
        __metadata("design:type", Boolean)
    ], ValidationAuthority.prototype, "alwaysValid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=badTtl" }),
        __metadata("design:type", Number)
    ], ValidationAuthority.prototype, "badTtl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ValidationAuthority.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=goodTtl" }),
        __metadata("design:type", Number)
    ], ValidationAuthority.prototype, "goodTtl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", Map)
    ], ValidationAuthority.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], ValidationAuthority.prototype, "host", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ValidationAuthority.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], ValidationAuthority.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ValidationAuthority.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=noCache" }),
        __metadata("design:type", Boolean)
    ], ValidationAuthority.prototype, "noCache", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], ValidationAuthority.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeout" }),
        __metadata("design:type", Number)
    ], ValidationAuthority.prototype, "timeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ValidationAuthority.prototype, "url", void 0);
    return ValidationAuthority;
}(SpeakeasyBase));
export { ValidationAuthority };
