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
import { CloudSqlConfig } from "./cloudsqlconfig";
import { GoogleCloudServicenetworkingV1ConsumerConfigReservedRange } from "./googlecloudservicenetworkingv1consumerconfigreservedrange";
// ConsumerConfigInput
/**
 * Configuration information for a private service access connection.
**/
var ConsumerConfigInput = /** @class */ (function (_super) {
    __extends(ConsumerConfigInput, _super);
    function ConsumerConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudsqlConfigs", elemType: CloudSqlConfig }),
        __metadata("design:type", Array)
    ], ConsumerConfigInput.prototype, "cloudsqlConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consumerExportCustomRoutes" }),
        __metadata("design:type", Boolean)
    ], ConsumerConfigInput.prototype, "consumerExportCustomRoutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consumerExportSubnetRoutesWithPublicIp" }),
        __metadata("design:type", Boolean)
    ], ConsumerConfigInput.prototype, "consumerExportSubnetRoutesWithPublicIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consumerImportCustomRoutes" }),
        __metadata("design:type", Boolean)
    ], ConsumerConfigInput.prototype, "consumerImportCustomRoutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consumerImportSubnetRoutesWithPublicIp" }),
        __metadata("design:type", Boolean)
    ], ConsumerConfigInput.prototype, "consumerImportSubnetRoutesWithPublicIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=producerExportCustomRoutes" }),
        __metadata("design:type", Boolean)
    ], ConsumerConfigInput.prototype, "producerExportCustomRoutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=producerExportSubnetRoutesWithPublicIp" }),
        __metadata("design:type", Boolean)
    ], ConsumerConfigInput.prototype, "producerExportSubnetRoutesWithPublicIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=producerImportCustomRoutes" }),
        __metadata("design:type", Boolean)
    ], ConsumerConfigInput.prototype, "producerImportCustomRoutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=producerImportSubnetRoutesWithPublicIp" }),
        __metadata("design:type", Boolean)
    ], ConsumerConfigInput.prototype, "producerImportSubnetRoutesWithPublicIp", void 0);
    return ConsumerConfigInput;
}(SpeakeasyBase));
export { ConsumerConfigInput };
// ConsumerConfig
/**
 * Configuration information for a private service access connection.
**/
var ConsumerConfig = /** @class */ (function (_super) {
    __extends(ConsumerConfig, _super);
    function ConsumerConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudsqlConfigs", elemType: CloudSqlConfig }),
        __metadata("design:type", Array)
    ], ConsumerConfig.prototype, "cloudsqlConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consumerExportCustomRoutes" }),
        __metadata("design:type", Boolean)
    ], ConsumerConfig.prototype, "consumerExportCustomRoutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consumerExportSubnetRoutesWithPublicIp" }),
        __metadata("design:type", Boolean)
    ], ConsumerConfig.prototype, "consumerExportSubnetRoutesWithPublicIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consumerImportCustomRoutes" }),
        __metadata("design:type", Boolean)
    ], ConsumerConfig.prototype, "consumerImportCustomRoutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consumerImportSubnetRoutesWithPublicIp" }),
        __metadata("design:type", Boolean)
    ], ConsumerConfig.prototype, "consumerImportSubnetRoutesWithPublicIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=producerExportCustomRoutes" }),
        __metadata("design:type", Boolean)
    ], ConsumerConfig.prototype, "producerExportCustomRoutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=producerExportSubnetRoutesWithPublicIp" }),
        __metadata("design:type", Boolean)
    ], ConsumerConfig.prototype, "producerExportSubnetRoutesWithPublicIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=producerImportCustomRoutes" }),
        __metadata("design:type", Boolean)
    ], ConsumerConfig.prototype, "producerImportCustomRoutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=producerImportSubnetRoutesWithPublicIp" }),
        __metadata("design:type", Boolean)
    ], ConsumerConfig.prototype, "producerImportSubnetRoutesWithPublicIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=producerNetwork" }),
        __metadata("design:type", String)
    ], ConsumerConfig.prototype, "producerNetwork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reservedRanges", elemType: GoogleCloudServicenetworkingV1ConsumerConfigReservedRange }),
        __metadata("design:type", Array)
    ], ConsumerConfig.prototype, "reservedRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usedIpRanges" }),
        __metadata("design:type", Array)
    ], ConsumerConfig.prototype, "usedIpRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpcScReferenceArchitectureEnabled" }),
        __metadata("design:type", Boolean)
    ], ConsumerConfig.prototype, "vpcScReferenceArchitectureEnabled", void 0);
    return ConsumerConfig;
}(SpeakeasyBase));
export { ConsumerConfig };
