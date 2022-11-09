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
var CriticMultimediaResource = /** @class */ (function (_super) {
    __extends(CriticMultimediaResource, _super);
    function CriticMultimediaResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=credit" }),
        __metadata("design:type", String)
    ], CriticMultimediaResource.prototype, "credit", void 0);
    __decorate([
        Metadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], CriticMultimediaResource.prototype, "height", void 0);
    __decorate([
        Metadata({ data: "json, name=src" }),
        __metadata("design:type", String)
    ], CriticMultimediaResource.prototype, "src", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CriticMultimediaResource.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], CriticMultimediaResource.prototype, "width", void 0);
    return CriticMultimediaResource;
}(SpeakeasyBase));
export { CriticMultimediaResource };
var CriticMultimedia = /** @class */ (function (_super) {
    __extends(CriticMultimedia, _super);
    function CriticMultimedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=resource" }),
        __metadata("design:type", CriticMultimediaResource)
    ], CriticMultimedia.prototype, "resource", void 0);
    return CriticMultimedia;
}(SpeakeasyBase));
export { CriticMultimedia };
var Critic = /** @class */ (function (_super) {
    __extends(Critic, _super);
    function Critic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=bio" }),
        __metadata("design:type", String)
    ], Critic.prototype, "bio", void 0);
    __decorate([
        Metadata({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], Critic.prototype, "displayName", void 0);
    __decorate([
        Metadata({ data: "json, name=multimedia" }),
        __metadata("design:type", CriticMultimedia)
    ], Critic.prototype, "multimedia", void 0);
    __decorate([
        Metadata({ data: "json, name=seo_name" }),
        __metadata("design:type", String)
    ], Critic.prototype, "seoName", void 0);
    __decorate([
        Metadata({ data: "json, name=sort_name" }),
        __metadata("design:type", String)
    ], Critic.prototype, "sortName", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Critic.prototype, "status", void 0);
    return Critic;
}(SpeakeasyBase));
export { Critic };
