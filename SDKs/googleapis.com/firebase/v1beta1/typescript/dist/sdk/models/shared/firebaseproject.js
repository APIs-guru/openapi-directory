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
import { DefaultResources } from "./defaultresources";
export var FirebaseProjectStateEnum;
(function (FirebaseProjectStateEnum) {
    FirebaseProjectStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    FirebaseProjectStateEnum["Active"] = "ACTIVE";
    FirebaseProjectStateEnum["Deleted"] = "DELETED";
})(FirebaseProjectStateEnum || (FirebaseProjectStateEnum = {}));
// FirebaseProject
/**
 * A `FirebaseProject` is the top-level Firebase entity. It is the container for Firebase Apps, Firebase Hosting sites, storage systems (Firebase Realtime Database, Cloud Firestore, Cloud Storage buckets), and other Firebase and Google Cloud Platform (GCP) resources. You create a `FirebaseProject` by calling AddFirebase and specifying an *existing* [GCP `Project`](https://cloud.google.com/resource-manager/reference/rest/v1/projects). This adds Firebase resources to the existing GCP `Project`. Since a FirebaseProject is actually also a GCP `Project`, a `FirebaseProject` has the same underlying GCP identifiers (`projectNumber` and `projectId`). This allows for easy interop with Google APIs.
**/
var FirebaseProject = /** @class */ (function (_super) {
    __extends(FirebaseProject, _super);
    function FirebaseProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=annotations" }),
        __metadata("design:type", Map)
    ], FirebaseProject.prototype, "annotations", void 0);
    __decorate([
        Metadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], FirebaseProject.prototype, "displayName", void 0);
    __decorate([
        Metadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], FirebaseProject.prototype, "etag", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], FirebaseProject.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], FirebaseProject.prototype, "projectId", void 0);
    __decorate([
        Metadata({ data: "json, name=projectNumber" }),
        __metadata("design:type", String)
    ], FirebaseProject.prototype, "projectNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=resources" }),
        __metadata("design:type", DefaultResources)
    ], FirebaseProject.prototype, "resources", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], FirebaseProject.prototype, "state", void 0);
    return FirebaseProject;
}(SpeakeasyBase));
export { FirebaseProject };
