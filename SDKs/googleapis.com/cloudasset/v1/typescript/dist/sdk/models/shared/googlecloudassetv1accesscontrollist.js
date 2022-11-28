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
import { GoogleCloudAssetV1Access } from "./googlecloudassetv1access";
import { ConditionEvaluation } from "./conditionevaluation";
import { GoogleCloudAssetV1Edge } from "./googlecloudassetv1edge";
import { GoogleCloudAssetV1Resource } from "./googlecloudassetv1resource";
// GoogleCloudAssetV1AccessControlList
/**
 * An access control list, derived from the above IAM policy binding, which contains a set of resources and accesses. May include one item from each set to compose an access control entry. NOTICE that there could be multiple access control lists for one IAM policy binding. The access control lists are created based on resource and access combinations. For example, assume we have the following cases in one IAM policy binding: - Permission P1 and P2 apply to resource R1 and R2; - Permission P3 applies to resource R2 and R3; This will result in the following access control lists: - AccessControlList 1: [R1, R2], [P1, P2] - AccessControlList 2: [R2, R3], [P3]
**/
var GoogleCloudAssetV1AccessControlList = /** @class */ (function (_super) {
    __extends(GoogleCloudAssetV1AccessControlList, _super);
    function GoogleCloudAssetV1AccessControlList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accesses", elemType: GoogleCloudAssetV1Access }),
        __metadata("design:type", Array)
    ], GoogleCloudAssetV1AccessControlList.prototype, "accesses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conditionEvaluation" }),
        __metadata("design:type", ConditionEvaluation)
    ], GoogleCloudAssetV1AccessControlList.prototype, "conditionEvaluation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceEdges", elemType: GoogleCloudAssetV1Edge }),
        __metadata("design:type", Array)
    ], GoogleCloudAssetV1AccessControlList.prototype, "resourceEdges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: GoogleCloudAssetV1Resource }),
        __metadata("design:type", Array)
    ], GoogleCloudAssetV1AccessControlList.prototype, "resources", void 0);
    return GoogleCloudAssetV1AccessControlList;
}(SpeakeasyBase));
export { GoogleCloudAssetV1AccessControlList };
