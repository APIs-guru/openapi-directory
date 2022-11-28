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
import { AccessReview } from "./accessreview";
import { GoogleCloudSecuritycenterV1Binding } from "./googlecloudsecuritycenterv1binding";
import { NodePool } from "./nodepool";
import { Node } from "./node";
import { Pod } from "./pod";
import { Role } from "./role";
// Kubernetes
/**
 * Kubernetes related attributes.
**/
var Kubernetes = /** @class */ (function (_super) {
    __extends(Kubernetes, _super);
    function Kubernetes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessReviews", elemType: AccessReview }),
        __metadata("design:type", Array)
    ], Kubernetes.prototype, "accessReviews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bindings", elemType: GoogleCloudSecuritycenterV1Binding }),
        __metadata("design:type", Array)
    ], Kubernetes.prototype, "bindings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodePools", elemType: NodePool }),
        __metadata("design:type", Array)
    ], Kubernetes.prototype, "nodePools", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodes", elemType: Node }),
        __metadata("design:type", Array)
    ], Kubernetes.prototype, "nodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pods", elemType: Pod }),
        __metadata("design:type", Array)
    ], Kubernetes.prototype, "pods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roles", elemType: Role }),
        __metadata("design:type", Array)
    ], Kubernetes.prototype, "roles", void 0);
    return Kubernetes;
}(SpeakeasyBase));
export { Kubernetes };
