package shared

// AppBundle
// An Android App Bundle file format, containing a BundleConfig.pb file, a base module directory, zero or more dynamic feature module directories. See https://developer.android.com/guide/app-bundle/build for guidance on building App Bundles.
type AppBundle struct {
	BundleLocation *FileReference `json:"bundleLocation,omitempty"`
}
