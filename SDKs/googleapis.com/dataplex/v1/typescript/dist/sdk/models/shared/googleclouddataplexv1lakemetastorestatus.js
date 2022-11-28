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
export var GoogleCloudDataplexV1LakeMetastoreStatusStateEnum;
(function (GoogleCloudDataplexV1LakeMetastoreStatusStateEnum) {
    GoogleCloudDataplexV1LakeMetastoreStatusStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudDataplexV1LakeMetastoreStatusStateEnum["None"] = "NONE";
    GoogleCloudDataplexV1LakeMetastoreStatusStateEnum["Ready"] = "READY";
    GoogleCloudDataplexV1LakeMetastoreStatusStateEnum["Updating"] = "UPDATING";
    GoogleCloudDataplexV1LakeMetastoreStatusStateEnum["Error"] = "ERROR";
})(GoogleCloudDataplexV1LakeMetastoreStatusStateEnum || (GoogleCloudDataplexV1LakeMetastoreStatusStateEnum = {}));
// GoogleCloudDataplexV1LakeMetastoreStatus
/**
 * Status of Lake and Dataproc Metastore service instance association.
**/
var GoogleCloudDataplexV1LakeMetastoreStatus = /** @class */ (function (_super) {
    __extends(GoogleCloudDataplexV1LakeMetastoreStatus, _super);
    function GoogleCloudDataplexV1LakeMetastoreStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpoint" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1LakeMetastoreStatus.prototype, "endpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1LakeMetastoreStatus.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1LakeMetastoreStatus.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1LakeMetastoreStatus.prototype, "updateTime", void 0);
    return GoogleCloudDataplexV1LakeMetastoreStatus;
}(SpeakeasyBase));
export { GoogleCloudDataplexV1LakeMetastoreStatus };
