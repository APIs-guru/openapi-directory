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
import { OwnerReference } from "./ownerreference";
// ObjectMeta
/**
 * k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
**/
var ObjectMeta = /** @class */ (function (_super) {
    __extends(ObjectMeta, _super);
    function ObjectMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations" }),
        __metadata("design:type", Map)
    ], ObjectMeta.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clusterName" }),
        __metadata("design:type", String)
    ], ObjectMeta.prototype, "clusterName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationTimestamp" }),
        __metadata("design:type", String)
    ], ObjectMeta.prototype, "creationTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deletionGracePeriodSeconds" }),
        __metadata("design:type", Number)
    ], ObjectMeta.prototype, "deletionGracePeriodSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deletionTimestamp" }),
        __metadata("design:type", String)
    ], ObjectMeta.prototype, "deletionTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finalizers" }),
        __metadata("design:type", Array)
    ], ObjectMeta.prototype, "finalizers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=generateName" }),
        __metadata("design:type", String)
    ], ObjectMeta.prototype, "generateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=generation" }),
        __metadata("design:type", Number)
    ], ObjectMeta.prototype, "generation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], ObjectMeta.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ObjectMeta.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=namespace" }),
        __metadata("design:type", String)
    ], ObjectMeta.prototype, "namespace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownerReferences", elemType: OwnerReference }),
        __metadata("design:type", Array)
    ], ObjectMeta.prototype, "ownerReferences", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceVersion" }),
        __metadata("design:type", String)
    ], ObjectMeta.prototype, "resourceVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], ObjectMeta.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], ObjectMeta.prototype, "uid", void 0);
    return ObjectMeta;
}(SpeakeasyBase));
export { ObjectMeta };
