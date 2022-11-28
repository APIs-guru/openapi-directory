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
// GkeNamespaceInput
/**
 * GKE Namespace. The field names correspond to the resource metadata labels on monitored resources that fall under a namespace (for example, k8s_container or k8s_pod).
**/
var GkeNamespaceInput = /** @class */ (function (_super) {
    __extends(GkeNamespaceInput, _super);
    function GkeNamespaceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clusterName" }),
        __metadata("design:type", String)
    ], GkeNamespaceInput.prototype, "clusterName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], GkeNamespaceInput.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=namespaceName" }),
        __metadata("design:type", String)
    ], GkeNamespaceInput.prototype, "namespaceName", void 0);
    return GkeNamespaceInput;
}(SpeakeasyBase));
export { GkeNamespaceInput };
// GkeNamespace
/**
 * GKE Namespace. The field names correspond to the resource metadata labels on monitored resources that fall under a namespace (for example, k8s_container or k8s_pod).
**/
var GkeNamespace = /** @class */ (function (_super) {
    __extends(GkeNamespace, _super);
    function GkeNamespace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clusterName" }),
        __metadata("design:type", String)
    ], GkeNamespace.prototype, "clusterName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], GkeNamespace.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=namespaceName" }),
        __metadata("design:type", String)
    ], GkeNamespace.prototype, "namespaceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], GkeNamespace.prototype, "projectId", void 0);
    return GkeNamespace;
}(SpeakeasyBase));
export { GkeNamespace };
