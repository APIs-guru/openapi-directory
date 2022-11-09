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
import { GoogleCloudDatapipelinesV1SdkVersion } from "./googleclouddatapipelinesv1sdkversion";
// GoogleCloudDatapipelinesV1DataflowJobDetails
/**
 * Pipeline job details specific to the Dataflow API. This is encapsulated here to allow for more executors to store their specific details separately.
**/
var GoogleCloudDatapipelinesV1DataflowJobDetails = /** @class */ (function (_super) {
    __extends(GoogleCloudDatapipelinesV1DataflowJobDetails, _super);
    function GoogleCloudDatapipelinesV1DataflowJobDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=currentWorkers" }),
        __metadata("design:type", Number)
    ], GoogleCloudDatapipelinesV1DataflowJobDetails.prototype, "currentWorkers", void 0);
    __decorate([
        Metadata({ data: "json, name=resourceInfo" }),
        __metadata("design:type", Map)
    ], GoogleCloudDatapipelinesV1DataflowJobDetails.prototype, "resourceInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=sdkVersion" }),
        __metadata("design:type", GoogleCloudDatapipelinesV1SdkVersion)
    ], GoogleCloudDatapipelinesV1DataflowJobDetails.prototype, "sdkVersion", void 0);
    return GoogleCloudDatapipelinesV1DataflowJobDetails;
}(SpeakeasyBase));
export { GoogleCloudDatapipelinesV1DataflowJobDetails };
