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
import { GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo } from "./googleclouddataplexv1dataprofileresultprofilefieldprofileinfodoublefieldinfo";
import { GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo } from "./googleclouddataplexv1dataprofileresultprofilefieldprofileinfointegerfieldinfo";
import { GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo } from "./googleclouddataplexv1dataprofileresultprofilefieldprofileinfostringfieldinfo";
import { GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue } from "./googleclouddataplexv1dataprofileresultprofilefieldprofileinfotopnvalue";
// GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo
/**
 * ProfileInfo defines the profile information for each schema field type.
**/
var GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo = /** @class */ (function (_super) {
    __extends(GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo, _super);
    function GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=distinctRatio" }),
        __metadata("design:type", Number)
    ], GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo.prototype, "distinctRatio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=doubleProfile" }),
        __metadata("design:type", GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo)
    ], GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo.prototype, "doubleProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integerProfile" }),
        __metadata("design:type", GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo)
    ], GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo.prototype, "integerProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nullRatio" }),
        __metadata("design:type", Number)
    ], GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo.prototype, "nullRatio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stringProfile" }),
        __metadata("design:type", GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo)
    ], GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo.prototype, "stringProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topNValues", elemType: GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue }),
        __metadata("design:type", Array)
    ], GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo.prototype, "topNValues", void 0);
    return GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo;
}(SpeakeasyBase));
export { GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo };
