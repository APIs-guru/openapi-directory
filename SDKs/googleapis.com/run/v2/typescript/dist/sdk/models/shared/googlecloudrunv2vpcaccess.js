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
export var GoogleCloudRunV2VpcAccessEgressEnum;
(function (GoogleCloudRunV2VpcAccessEgressEnum) {
    GoogleCloudRunV2VpcAccessEgressEnum["VpcEgressUnspecified"] = "VPC_EGRESS_UNSPECIFIED";
    GoogleCloudRunV2VpcAccessEgressEnum["AllTraffic"] = "ALL_TRAFFIC";
    GoogleCloudRunV2VpcAccessEgressEnum["PrivateRangesOnly"] = "PRIVATE_RANGES_ONLY";
})(GoogleCloudRunV2VpcAccessEgressEnum || (GoogleCloudRunV2VpcAccessEgressEnum = {}));
// GoogleCloudRunV2VpcAccess
/**
 * VPC Access settings. For more information on creating a VPC Connector, visit https://cloud.google.com/vpc/docs/configure-serverless-vpc-access For information on how to configure Cloud Run with an existing VPC Connector, visit https://cloud.google.com/run/docs/configuring/connecting-vpc
**/
var GoogleCloudRunV2VpcAccess = /** @class */ (function (_super) {
    __extends(GoogleCloudRunV2VpcAccess, _super);
    function GoogleCloudRunV2VpcAccess() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connector" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2VpcAccess.prototype, "connector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=egress" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2VpcAccess.prototype, "egress", void 0);
    return GoogleCloudRunV2VpcAccess;
}(SpeakeasyBase));
export { GoogleCloudRunV2VpcAccess };
