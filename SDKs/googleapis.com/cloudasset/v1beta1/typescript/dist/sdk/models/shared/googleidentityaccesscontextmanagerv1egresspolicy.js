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
import { GoogleIdentityAccesscontextmanagerV1EgressFrom } from "./googleidentityaccesscontextmanagerv1egressfrom";
import { GoogleIdentityAccesscontextmanagerV1EgressTo } from "./googleidentityaccesscontextmanagerv1egressto";
// GoogleIdentityAccesscontextmanagerV1EgressPolicy
/**
 * Policy for egress from perimeter. EgressPolicies match requests based on `egress_from` and `egress_to` stanzas. For an EgressPolicy to match, both `egress_from` and `egress_to` stanzas must be matched. If an EgressPolicy matches a request, the request is allowed to span the ServicePerimeter boundary. For example, an EgressPolicy can be used to allow VMs on networks within the ServicePerimeter to access a defined set of projects outside the perimeter in certain contexts (e.g. to read data from a Cloud Storage bucket or query against a BigQuery dataset). EgressPolicies are concerned with the *resources* that a request relates as well as the API services and API actions being used. They do not related to the direction of data movement. More detailed documentation for this concept can be found in the descriptions of EgressFrom and EgressTo.
**/
var GoogleIdentityAccesscontextmanagerV1EgressPolicy = /** @class */ (function (_super) {
    __extends(GoogleIdentityAccesscontextmanagerV1EgressPolicy, _super);
    function GoogleIdentityAccesscontextmanagerV1EgressPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=egressFrom" }),
        __metadata("design:type", GoogleIdentityAccesscontextmanagerV1EgressFrom)
    ], GoogleIdentityAccesscontextmanagerV1EgressPolicy.prototype, "egressFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=egressTo" }),
        __metadata("design:type", GoogleIdentityAccesscontextmanagerV1EgressTo)
    ], GoogleIdentityAccesscontextmanagerV1EgressPolicy.prototype, "egressTo", void 0);
    return GoogleIdentityAccesscontextmanagerV1EgressPolicy;
}(SpeakeasyBase));
export { GoogleIdentityAccesscontextmanagerV1EgressPolicy };
