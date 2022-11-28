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
import { Credential } from "./credential";
import { DeploymentLabelEntry } from "./deploymentlabelentry";
import { Operation } from "./operation";
import { DeploymentOutputEntry } from "./deploymentoutputentry";
import { TargetConfiguration } from "./targetconfiguration";
import { DeploymentUpdate } from "./deploymentupdate";
var Deployment = /** @class */ (function (_super) {
    __extends(Deployment, _super);
    function Deployment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credential" }),
        __metadata("design:type", Credential)
    ], Deployment.prototype, "credential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Deployment.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fingerprint" }),
        __metadata("design:type", String)
    ], Deployment.prototype, "fingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Deployment.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insertTime" }),
        __metadata("design:type", String)
    ], Deployment.prototype, "insertTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels", elemType: DeploymentLabelEntry }),
        __metadata("design:type", Array)
    ], Deployment.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manifest" }),
        __metadata("design:type", String)
    ], Deployment.prototype, "manifest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Deployment.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operation" }),
        __metadata("design:type", Operation)
    ], Deployment.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputs", elemType: DeploymentOutputEntry }),
        __metadata("design:type", Array)
    ], Deployment.prototype, "outputs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], Deployment.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target" }),
        __metadata("design:type", TargetConfiguration)
    ], Deployment.prototype, "target", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=update" }),
        __metadata("design:type", DeploymentUpdate)
    ], Deployment.prototype, "update", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Deployment.prototype, "updateTime", void 0);
    return Deployment;
}(SpeakeasyBase));
export { Deployment };
